CREATE DATABASE IF NOT EXISTS hirata_ti
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE hirata_ti;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL,
  email VARCHAR(160) UNIQUE,
  rol ENUM('Administrador', 'Tecnico', 'Auditor') NOT NULL DEFAULT 'Tecnico',
  activo TINYINT(1) NOT NULL DEFAULT 1,
  creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS activos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo VARCHAR(40) NOT NULL UNIQUE,
  tipo_registro ENUM('Equipo', 'Componente', 'Periferico', 'Accesorio') NOT NULL,
  categoria VARCHAR(80) NOT NULL,
  marca VARCHAR(80),
  modelo VARCHAR(160),
  numero_serie VARCHAR(120) UNIQUE,
  mac_pn VARCHAR(120) UNIQUE,
  capacidad_frecuencia VARCHAR(120),
  factor_forma_conector VARCHAR(120),
  equipo_asociado VARCHAR(40),
  stock_actual INT NOT NULL DEFAULT 1,
  stock_minimo INT NOT NULL DEFAULT 0,
  estado ENUM('Operacional', 'Observado', 'En mantencion', 'Baja', 'Stock Critico') NOT NULL DEFAULT 'Operacional',
  ubicacion VARCHAR(160),
  creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualizado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_activo_equipo_asociado
    FOREIGN KEY (equipo_asociado) REFERENCES activos(codigo)
    ON UPDATE CASCADE
    ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS mantenimientos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo_registro VARCHAR(40) NOT NULL UNIQUE,
  fecha_servicio DATE NOT NULL,
  codigo_equipo VARCHAR(40) NOT NULL,
  numero_serie VARCHAR(120),
  tipo_mantenimiento ENUM('Preventivo', 'Correctivo', 'Actualizacion', 'Auditoria') NOT NULL,
  detalles TEXT,
  tecnico_responsable VARCHAR(120) NOT NULL,
  estado_final ENUM('Operacional', 'Observado', 'Pendiente', 'Cerrado') NOT NULL DEFAULT 'Pendiente',
  creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_mantenimiento_activo
    FOREIGN KEY (codigo_equipo) REFERENCES activos(codigo)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS mantenimiento_repuestos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mantenimiento_id INT NOT NULL,
  codigo_repuesto VARCHAR(40) NOT NULL,
  cantidad INT NOT NULL DEFAULT 1,
  observacion VARCHAR(255),
  CONSTRAINT fk_repuesto_mantenimiento
    FOREIGN KEY (mantenimiento_id) REFERENCES mantenimientos(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_repuesto_activo
    FOREIGN KEY (codigo_repuesto) REFERENCES activos(codigo)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS tareas_mantenimiento (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo_tarea VARCHAR(40) NOT NULL UNIQUE,
  semana INT,
  dia VARCHAR(20),
  activo_equipo VARCHAR(120) NOT NULL,
  descripcion TEXT NOT NULL,
  responsable VARCHAR(120) NOT NULL,
  prioridad ENUM('Alta', 'Media', 'Baja') NOT NULL DEFAULT 'Media',
  estado ENUM('Pendiente', 'En proceso', 'Observado', 'Cerrado') NOT NULL DEFAULT 'Pendiente',
  fecha_objetivo DATE,
  creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS checklists (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo_equipo VARCHAR(40) NOT NULL,
  categoria VARCHAR(80) NOT NULL,
  limpieza_fisica ENUM('Pendiente', 'Realizado', 'No aplica') NOT NULL DEFAULT 'Pendiente',
  actualizacion_sw ENUM('Pendiente', 'Realizado', 'No aplica') NOT NULL DEFAULT 'Pendiente',
  cambio_pasta_termica ENUM('Pendiente', 'Realizado', 'No aplica') NOT NULL DEFAULT 'Pendiente',
  revision_bateria_ups ENUM('Pendiente', 'Realizado', 'No aplica') NOT NULL DEFAULT 'Pendiente',
  diagnostico_disco_ram ENUM('Pendiente', 'Realizado', 'No aplica') NOT NULL DEFAULT 'Pendiente',
  observaciones TEXT,
  actualizado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS procedimientos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo_activo VARCHAR(80) NOT NULL UNIQUE,
  actividades_detalladas TEXT NOT NULL,
  nota VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS actualizaciones_software (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo_equipo VARCHAR(40) NOT NULL,
  software VARCHAR(120) NOT NULL,
  version_anterior VARCHAR(80),
  version_nueva VARCHAR(80) NOT NULL,
  fecha_actualizacion DATE NOT NULL,
  responsable VARCHAR(120) NOT NULL,
  resultado ENUM('Correcto', 'Observado', 'Pendiente') NOT NULL DEFAULT 'Pendiente',
  observaciones TEXT,
  CONSTRAINT fk_actualizacion_activo
    FOREIGN KEY (codigo_equipo) REFERENCES activos(codigo)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

CREATE OR REPLACE VIEW vista_alertas AS
SELECT
  'Stock critico' AS tipo,
  'Alta' AS prioridad,
  codigo AS referencia,
  CONCAT(categoria, ' bajo minimo: ', stock_actual, '/', stock_minimo) AS mensaje
FROM activos
WHERE stock_actual <= stock_minimo
UNION ALL
SELECT
  'Equipo observado' AS tipo,
  'Media' AS prioridad,
  codigo_registro AS referencia,
  CONCAT(codigo_equipo, ' quedo observado tras mantenimiento') AS mensaje
FROM mantenimientos
WHERE estado_final = 'Observado'
UNION ALL
SELECT
  'Tarea pendiente' AS tipo,
  prioridad,
  codigo_tarea AS referencia,
  CONCAT(activo_equipo, ': ', descripcion) AS mensaje
FROM tareas_mantenimiento
WHERE estado IN ('Pendiente', 'En proceso', 'Observado');
