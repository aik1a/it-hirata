<?php

require __DIR__ . '/db.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

try {
    $body = json_decode(file_get_contents('php://input'), true);
    $accion = $body['accion'] ?? '';

    if ($accion === 'actualizar_campo') {
        // Convierte el valor del frontend a 0/1 para la BD
        $valor = ($body['valor'] === 'Realizado') ? 1 : 0;

        // Columnas válidas que se pueden actualizar
        $columnas = [
            'limpieza'  => 'limpieza_fisica',
            'software'  => 'actualizacion_sw',
            'pasta'     => 'cambio_pasta_termica',
            'ups'       => 'revision_bateria_ups',
            'discoRam'  => 'diagnostico_disco_ram',
        ];

        $campo = $body['campo'] ?? '';
        if (!isset($columnas[$campo])) {
            throw new Exception('Campo no válido: ' . $campo);
        }

        $columna = $columnas[$campo];

        // Buscar el id del checklist por id_tarea, que a su vez viene del equipo
        $registros = rows('
            SELECT c.id FROM checklist c
            JOIN tareas_mantenciones t ON c.id_tarea = t.id_tarea
            WHERE t.id_equipo = ?
            LIMIT 1
        ', [$body['equipo']]);

        if (empty($registros)) {
            throw new Exception('Checklist no encontrado para equipo: ' . $body['equipo']);
        }

        $id = $registros[0]['id'];
        $pdo = db();
        $pdo->prepare("UPDATE checklist SET {$columna} = ? WHERE id = ?")
            ->execute([$valor, $id]);

        echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);

    } elseif ($accion === 'actualizar_observacion') {
        $registros = rows('
            SELECT c.id FROM checklist c
            JOIN tareas_mantenciones t ON c.id_tarea = t.id_tarea
            WHERE t.id_equipo = ?
            LIMIT 1
        ', [$body['equipo']]);

        if (empty($registros)) {
            throw new Exception('Checklist no encontrado para equipo: ' . $body['equipo']);
        }

        $id = $registros[0]['id'];
        $pdo = db();
        $pdo->prepare('UPDATE checklist SET observaciones = ? WHERE id = ?')
            ->execute([$body['valor'], $id]);

        echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);

    } else {
        throw new Exception('Acción no reconocida: ' . $accion);
    }

} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $e->getMessage()], JSON_UNESCAPED_UNICODE);
}
