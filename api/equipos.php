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
        // Parsear stock "actual/minimo"
        [$stock_actual, $stock_minimo] = explode('/', $body['stock']);

        $pdo = db();
        $stmt = $pdo->prepare('
            INSERT INTO equipos (id_equipo, tipo_registro, categoria, marca, modelo, numero_serie, mac_address, stock_actual, stock_minimo, estado, ubicacion)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ');
        $stmt->execute([
            $body['codigo'],
            $body['tipo'],
            $body['categoria'],
            $body['marca'] ?: null,
            $body['modelo'] ?: null,
            $body['serie'] ?: null,
            $body['macPn'] ?: null,
            intval($stock_actual),
            intval($stock_minimo),
            $body['estado'],
            $body['ubicacion'] ?: null
        ]);

        echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);

    } elseif ($accion === 'editar') {
        [$stock_actual, $stock_minimo] = explode('/', $body['stock']);

        $pdo = db();
        $stmt = $pdo->prepare('
            UPDATE equipos
            SET tipo_registro = ?, categoria = ?, marca = ?, modelo = ?, numero_serie = ?,
                mac_address = ?, stock_actual = ?, stock_minimo = ?, estado = ?, ubicacion = ?
            WHERE id_equipo = ?
        ');
        $stmt->execute([
            $body['tipo'],
            $body['categoria'],
            $body['marca'] ?: null,
            $body['modelo'] ?: null,
            $body['serie'] ?: null,
            $body['macPn'] ?: null,
            intval($stock_actual),
            intval($stock_minimo),
            $body['estado'],
            $body['ubicacion'] ?: null,
            $body['codigo']
        ]);

        echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);

    } elseif ($accion === 'eliminar') {
        $pdo = db();
        $pdo->prepare('DELETE FROM equipos WHERE id_equipo = ?')->execute([$body['codigo']]);

        echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);

    } else {
        throw new Exception('Acción no reconocida: ' . $accion);
    }

} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $e->getMessage()], JSON_UNESCAPED_UNICODE);
}
