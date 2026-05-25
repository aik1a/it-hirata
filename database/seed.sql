USE hirata_ti;

INSERT INTO usuarios (nombre, email, rol) VALUES
('Juan Perez', 'juan.perez@hirata.local', 'Tecnico'),
('Pedro Soto', 'pedro.soto@hirata.local', 'Tecnico'),
('Camila Rojas', 'camila.rojas@hirata.local', 'Administrador')
ON DUPLICATE KEY UPDATE nombre = VALUES(nombre), rol = VALUES(rol);

INSERT INTO activos (
  codigo, tipo_registro, categoria, marca, modelo, numero_serie, mac_pn,
  capacidad_frecuencia, factor_forma_conector, equipo_asociado,
  stock_actual, stock_minimo, estado, ubicacion
) VALUES
('PC-MP-001', 'Equipo', 'Torre Escritorio', 'HP', 'ProDesk 600 G6', 'MXL1234567', '00:1A:2B:3C:4D:5E', 'N/A', 'SFF', NULL, 1, 0, 'Operacional', 'Oficina Central'),
('NTB-MP-001', 'Equipo', 'Notebook', 'Lenovo', 'ThinkPad L14', 'PF2A3B4C', '00:1A:2B:3C:4D:5F', 'N/A', '14 pulgadas', NULL, 1, 0, 'Operacional', 'Terreno Ventas'),
('SRV-ADM-01', 'Equipo', 'Servidor', 'Dell', 'PowerEdge T140', 'DL-SRV-991', '00:1A:2B:3C:4D:60', '32GB RAM', 'Torre', NULL, 1, 0, 'Observado', 'Sala TI'),
('UPS-01', 'Equipo', 'UPS', 'APC', 'Back-UPS Pro', 'UPS88990', 'N/A', '1500VA', 'Torre', NULL, 1, 0, 'Operacional', 'Sala TI'),
('ALM-002', 'Componente', 'SSD', 'Crucial', 'MX500', 'SSD500-002', 'CT500MX500SSD1', '500GB', '2.5 SATA', 'NTB-MP-001', 2, 2, 'Stock Critico', 'Bodega TI'),
('RAM-008', 'Componente', 'Memoria RAM', 'Kingston', 'DDR4', 'RAMDDR4-008', 'KVR26N19S8/8', '8GB 2666MHz', 'DIMM', NULL, 1, 2, 'Stock Critico', 'Bodega TI'),
('KIT-001', 'Accesorio', 'Pasta Termica', 'Generica', 'Gris 4g', 'PT-001', 'PT-GEN-4G', '4g', 'Jeringa', NULL, 4, 2, 'Operacional', 'Bodega TI')
ON DUPLICATE KEY UPDATE
  tipo_registro = VALUES(tipo_registro),
  categoria = VALUES(categoria),
  marca = VALUES(marca),
  modelo = VALUES(modelo),
  stock_actual = VALUES(stock_actual),
  stock_minimo = VALUES(stock_minimo),
  estado = VALUES(estado),
  ubicacion = VALUES(ubicacion);

INSERT INTO mantenimientos (
  codigo_registro, fecha_servicio, codigo_equipo, numero_serie,
  tipo_mantenimiento, detalles, tecnico_responsable, estado_final
) VALUES
('MNT-1001', '2026-05-10', 'PC-MP-001', 'MXL1234567', 'Preventivo', 'Soplado de polvo y cambio de pasta termica. Equipo con exceso de tierra.', 'Juan Perez', 'Operacional'),
('MNT-1002', '2026-05-11', 'NTB-MP-001', 'PF2A3B4C', 'Correctivo', 'Pantalla azul. Se diagnostico falla en sector de arranque y se reemplazo SSD.', 'Pedro Soto', 'Operacional'),
('MNT-1003', '2026-05-12', 'SRV-ADM-01', 'DL-SRV-991', 'Auditoria', 'Revision de logs y alerta de temperatura elevada en bahia de discos.', 'Camila Rojas', 'Observado')
ON DUPLICATE KEY UPDATE estado_final = VALUES(estado_final), detalles = VALUES(detalles);

INSERT INTO tareas_mantenimiento (
  codigo_tarea, semana, dia, activo_equipo, descripcion, responsable,
  prioridad, estado, fecha_objetivo
) VALUES
('T001', 1, 'Lunes', 'Servidor Central', 'Mantenimiento preventivo: limpieza, logs y backups', 'Tecnico TI', 'Alta', 'En proceso', '2026-05-22'),
('T002', 1, 'Lunes', 'UPS', 'Test de baterias y limpieza externa', 'Tecnico TI', 'Alta', 'Pendiente', '2026-05-22'),
('T003', 1, 'Martes', 'Switch de Red', 'Limpieza de puertos y ordenamiento de cables', 'Tecnico TI', 'Media', 'Pendiente', '2026-05-23'),
('T004', 1, 'Miercoles', 'PC Escritorio 01', 'Limpieza interna, pasta termica y actualizaciones', 'Soporte', 'Media', 'Observado', '2026-05-24'),
('T005', 1, 'Miercoles', 'PC Escritorio 02', 'Limpieza interna, pasta termica y actualizaciones', 'Soporte', 'Media', 'Cerrado', '2026-05-20')
ON DUPLICATE KEY UPDATE estado = VALUES(estado), prioridad = VALUES(prioridad);

INSERT INTO checklists (
  codigo_equipo, categoria, limpieza_fisica, actualizacion_sw,
  cambio_pasta_termica, revision_bateria_ups, diagnostico_disco_ram, observaciones
) VALUES
('SERV-01', 'Servidor', 'Pendiente', 'Pendiente', 'Pendiente', 'Pendiente', 'Pendiente', ''),
('SW-01', 'Switch', 'Pendiente', 'No aplica', 'No aplica', 'No aplica', 'Pendiente', ''),
('UPS-01', 'UPS', 'Pendiente', 'Pendiente', 'No aplica', 'Pendiente', 'No aplica', ''),
('PC-01', 'Escritorio', 'Pendiente', 'Pendiente', 'Pendiente', 'No aplica', 'Pendiente', '')
ON DUPLICATE KEY UPDATE observaciones = VALUES(observaciones);

INSERT INTO procedimientos (tipo_activo, actividades_detalladas, nota) VALUES
('Servidor', 'Revision de logs de sistema, verificacion de arreglos RAID, limpieza de bahias de discos y actualizacion de parches de seguridad.', 'Planificacion del servicio. Sanity check.'),
('Switch de Red', 'Limpieza de puertos con aire comprimido, revision de temperatura de operacion y verificacion de loops de red.', NULL),
('UPS', 'Prueba de carga de bateria, limpieza de bornes y verificacion de alertas de software de gestion.', NULL),
('Equipos PC/NB', 'Soplado interno de polvo, limpieza de pantallas y teclados, actualizacion de antivirus y sistema operativo, revision de temperatura CPU.', NULL)
ON DUPLICATE KEY UPDATE actividades_detalladas = VALUES(actividades_detalladas);

INSERT INTO actualizaciones_software (
  codigo_equipo, software, version_anterior, version_nueva,
  fecha_actualizacion, responsable, resultado, observaciones
) VALUES
('PC-MP-001', 'Windows Update', '22H2', '23H2', '2026-05-10', 'Juan Perez', 'Correcto', 'Actualizacion sin incidentes.'),
('NTB-MP-001', 'Antivirus', '4.8.1', '4.9.0', '2026-05-11', 'Pedro Soto', 'Correcto', 'Se valido escaneo posterior.'),
('SRV-ADM-01', 'Parches de seguridad', 'Abril 2026', 'Mayo 2026', '2026-05-12', 'Camila Rojas', 'Observado', 'Requiere ventana adicional por alerta de temperatura.');
