# Diseno del Dashboard Hirata TI

## Direccion Elegida

La base visual aprobada es la propuesta tipo kanban, pero con menos ruido visual.

Principios:

- La pantalla principal debe priorizar alertas y flujo operativo.
- Cada tabla de Excel se representara como una seccion o ventana independiente.
- El kanban debe ser limpio, con jerarquias visuales claras.
- Los graficos no son necesarios en la primera version.
- Las alertas deben generarse desde reglas de base de datos.

## Jerarquia Visual del Inicio

Orden recomendado:

1. Barra superior con nombre del sistema y pestanas principales.
2. Bloque compacto de alertas prioritarias.
3. Kanban operativo con zonas desplegables.
4. Resumen numerico minimo.

## Kanban de Bajo Ruido

Para evitar desorden visual:

- Cada estado del kanban es una zona desplegable.
- Las columnas muestran primero un encabezado con contador, prioridad dominante y accion rapida.
- Las tarjetas muestran solo informacion esencial.
- El detalle extendido se despliega dentro de la tarjeta bajo demanda.
- Los colores se reservan para prioridad o estado critico, no para decorar.

Estados iniciales:

- Pendiente
- En proceso
- Observado
- Cerrado

Campos visibles en tarjeta:

- ID del activo o tarea.
- Titulo breve.
- Prioridad.
- Fecha limite o fecha de servicio.
- Tecnico/responsable.

Detalle desplegable:

- Numero de serie.
- Repuestos asociados.
- Observaciones.
- Accion recomendada.

## Secciones por Tabla Excel

- Inventario RF-09: tabla de activos, componentes, stock y ubicacion.
- Historial RF-08: tabla de mantenimientos e intervenciones.
- Cronograma: tabla de tareas planificadas.
- Checklist: revision tecnica por equipo.
- Procedimientos: plantilla por tipo de activo.
- Actualizaciones RF-07: control de versiones por equipo.

## Reglas de Alerta Iniciales

- Stock critico: `stock_actual <= stock_minimo`.
- Equipo observado: estado del equipo o mantenimiento igual a `Observado`.
- Tarea vencida: tarea pendiente cuya fecha objetivo ya paso.
- Actualizacion pendiente: equipo sin revision de software reciente.
- Repuesto usado: mantenimiento que descuenta stock del inventario.

## Criterio de Primera Version

La primera version debe permitir:

- Navegar por pestanas.
- Ver alertas prioritarias.
- Revisar kanban operativo.
- Consultar cada tabla base.
- Funcionar con datos demo si la API local aun no esta disponible.
- Conectarse a MySQL/XAMPP cuando se configure la base local.
