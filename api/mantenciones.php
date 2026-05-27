<?php

require __DIR__ . '/db.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

try {
    $body = json_decode(file_get_contents('php://input'), true);
    $accion = $body['accion'] ?? '';

    if ($accion === 'crear') {
        // Buscar el técnico por nombre
        $tecnicos = rows('SELECT id_tecnico FROM tecnicos WHERE nombre = ? LIMIT 1', [$body['tecnico']]);
        if (empty($tecnicos)) {
            throw new Exception('Técnico no encontrado: ' . $body['tecnico']);
        }
        $id_tecnico = $tecnicos[0]['id_tecnico'];

        // Generar ID correlativo
        $ultimo = rows('SELECT id_registro FROM mantenciones ORDER BY id_registro DESC LIMIT 1');
        $numero = empty($ultimo) ? 1001 : (intval(substr($ultimo[0]['id_registro'], 4)) + 1);
        $id_registro = 'MNT-' . $numero;

        $pdo = db();
        $stmt = $pdo->prepare('
            INSERT INTO mantenciones (id_registro, fecha_servicio, id_equipo, tipo, detalles, id_tecnico, estado_final)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ');
        $stmt->execute([
            $id_registro,
            $body['fecha'],
            $body['equipo'],
            $body['tipo'],
            $body['detalle'],
            $id_tecnico,
            $body['estado']
        ]);

        echo json_encode(['ok' => true, 'id_registro' => $id_registro], JSON_UNESCAPED_UNICODE);

    } elseif ($accion === 'editar') {
        $tecnicos = rows('SELECT id_tecnico FROM tecnicos WHERE nombre = ? LIMIT 1', [$body['tecnico']]);
        if (empty($tecnicos)) {
            throw new Exception('Técnico no encontrado: ' . $body['tecnico']);
        }
        $id_tecnico = $tecnicos[0]['id_tecnico'];

        $pdo = db();
        $stmt = $pdo->prepare('
            UPDATE mantenciones
            SET fecha_servicio = ?, id_equipo = ?, tipo = ?, detalles = ?, id_tecnico = ?, estado_final = ?
            WHERE id_registro = ?
        ');
        $stmt->execute([
            $body['fecha'],
            $body['equipo'],
            $body['tipo'],
            $body['detalle'],
            $id_tecnico,
            $body['estado'],
            $body['registro']
        ]);

        echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);

    } elseif ($accion === 'eliminar') {
        $pdo = db();
        // Primero eliminar repuestos asociados
        $pdo->prepare('DELETE FROM repuestos_usados WHERE id_registro = ?')->execute([$body['registro']]);
        // Luego eliminar la mantención
        $pdo->prepare('DELETE FROM mantenciones WHERE id_registro = ?')->execute([$body['registro']]);

        echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);

    } else {
        throw new Exception('Acción no reconocida: ' . $accion);
    }

} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $e->getMessage()], JSON_UNESCAPED_UNICODE);
}
