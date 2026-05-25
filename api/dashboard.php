<?php

require __DIR__ . '/db.php';

header('Content-Type: application/json; charset=utf-8');

try {
    $alertas = rows("
        SELECT 
            'Stock critico' AS tipo, 
            'Alta' AS prioridad, 
            id_equipo AS referencia, 
            CONCAT(categoria, ' bajo minimo: ', stock_actual, '/', stock_minimo) AS mensaje 
        FROM equipos 
        WHERE stock_actual <= stock_minimo

        UNION ALL

        SELECT 
            'Equipo observado' AS tipo, 
            'Media' AS prioridad, 
            id_registro AS referencia, 
            CONCAT(id_equipo, ' quedó observado tras mantención') AS mensaje 
        FROM mantenciones 
        WHERE estado_final = 'Observado'

        UNION ALL

        SELECT 
            'Tarea pendiente' AS tipo, 
            prioridad, 
            id_tarea AS referencia, 
            CONCAT(COALESCE(id_equipo, 'Sin equipo'), ': ', descripcion) AS mensaje 
        FROM tareas_mantenciones 
        WHERE estado IN ('Pendiente', 'En proceso')

        ORDER BY FIELD(prioridad, 'Alta', 'Media', 'Baja') 
        LIMIT 12
    ");

    $tareas = rows("
        SELECT
            t.id_tarea AS id,
            t.estado,
            COALESCE(t.id_equipo, 'Sin equipo') AS activo,
            t.descripcion AS titulo,
            t.prioridad,
            tec.nombre AS responsable,
            '' AS fecha,
            t.descripcion AS detalle
        FROM tareas_mantenciones t
        JOIN tecnicos tec ON t.id_tecnico = tec.id_tecnico
        ORDER BY FIELD(t.estado, 'Pendiente', 'En proceso', 'Observado', 'Cerrado'),
                 FIELD(t.prioridad, 'Alta', 'Media', 'Baja')
    ");

    $inventario = rows("
        SELECT
            id_equipo AS codigo,
            tipo_registro AS tipo,
            categoria,
            marca,
            modelo,
            numero_serie AS serie,
            mac_address AS macPn,
            CONCAT(stock_actual, '/', stock_minimo) AS stock,
            estado,
            ubicacion
        FROM equipos
        ORDER BY tipo_registro, categoria, id_equipo
    ");

    $historial = rows("
        SELECT
            m.id_registro AS registro,
            DATE_FORMAT(m.fecha_servicio, '%Y-%m-%d') AS fecha,
            m.id_equipo AS equipo,
            e.numero_serie AS serie,
            m.tipo,
            m.detalles AS detalle,
            COALESCE((
                SELECT GROUP_CONCAT(ru.id_equipo SEPARATOR ', ')
                FROM repuestos_usados ru
                WHERE ru.id_registro = m.id_registro
            ), 'N/A') AS repuestos,
            t.nombre AS tecnico,
            m.estado_final AS estado
        FROM mantenciones m
        JOIN tecnicos t ON m.id_tecnico = t.id_tecnico
        LEFT JOIN equipos e ON m.id_equipo = e.id_equipo
        ORDER BY m.fecha_servicio DESC
    ");

    $cronograma = rows("
        SELECT
            t.id_tarea AS tarea,
            t.semana,
            t.dia,
            COALESCE(t.id_equipo, 'Sin equipo') AS activo,
            t.descripcion,
            tec.nombre AS responsable,
            t.prioridad,
            t.estado
        FROM tareas_mantenciones t
        JOIN tecnicos tec ON t.id_tecnico = tec.id_tecnico
        ORDER BY t.semana, t.dia, t.id_tarea
    ");

    $checklist = rows("
        SELECT
            t.id_equipo AS equipo,
            e.categoria,
            CASE WHEN c.limpieza_fisica = 1 THEN 'Realizado' ELSE 'Pendiente' END AS limpieza,
            CASE WHEN c.actualizacion_sw = 1 THEN 'Realizado' ELSE 'Pendiente' END AS software,
            CASE WHEN c.cambio_pasta_termica = 1 THEN 'Realizado' ELSE 'Pendiente' END AS pasta,
            CASE WHEN c.revision_bateria_ups = 1 THEN 'Realizado' ELSE 'Pendiente' END AS ups,
            CASE WHEN c.diagnostico_disco_ram = 1 THEN 'Realizado' ELSE 'Pendiente' END AS discoRam,
            c.observaciones
        FROM checklist c
        JOIN tareas_mantenciones t ON c.id_tarea = t.id_tarea
        LEFT JOIN equipos e ON t.id_equipo = e.id_equipo
        ORDER BY t.id_equipo
    ");

    $procedimientos = [];
    $actualizaciones = [];

    echo json_encode([
        'alertas' => $alertas,
        'tareas' => $tareas,
        'inventario' => $inventario,
        'historial' => $historial,
        'cronograma' => $cronograma,
        'checklist' => $checklist,
        'procedimientos' => $procedimientos,
        'actualizaciones' => $actualizaciones,
    ], JSON_UNESCAPED_UNICODE);
} catch (Throwable $error) {
    http_response_code(500);
    echo json_encode([
        'error' => 'No fue posible cargar el dashboard.',
        'detail' => $error->getMessage(),
    ], JSON_UNESCAPED_UNICODE);
}
