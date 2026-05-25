# Gestion de Infraestructura TI Hirata

Documentacion de trabajo construida desde el PDF `Gestion de Infraestructura TI Hirata (1).pdf` y los archivos Excel del repositorio.

## Contexto

Empresa de Transportes Hirata necesita administrar procesos operativos del departamento TI para oficinas administrativas y soporte de equipos.

Problemas identificados:

- Gestion de flota: retrasos por fallas mecanicas imprevistas y falta de seguimiento de kilometraje para alertas cada 5.000 km.
- Equipos de oficina: disminucion del rendimiento operativo por falta de mantenimiento preventivo y programas informaticos obsoletos.

El foco del dashboard solicitado para este repositorio es la gestion TI de oficina: inventario, mantenimiento, actualizaciones, historial y trazabilidad.

## Pilares del Plan Integral

- Hardware: limpieza fisica, desarmado y sustitucion de piezas criticas como discos y memorias.
- Soporte logico: actualizacion sistematica de sistemas operativos y aplicaciones clave.
- Trazabilidad: registro historico y control de inventario mediante bases de datos relacionales.

## Alternativa Tecnica Seleccionada

El documento compara tres metodos:

| Metodo | Ventajas | Desventajas |
| --- | --- | --- |
| Planillas manuales | Bajo costo inicial, facil uso | Riesgo de error humano, dificil auditoria |
| Base de datos relacional | Trazabilidad total, seguridad, rapidez | Requiere desarrollo y mantenimiento |
| Plataformas especializadas | Automatizacion avanzada, reportes | Costo de licencias y capacitacion |

Seleccion Hirata: base de datos relacional MySQL.

## Requerimientos Funcionales del PDF

### RF-06: Registro de Servicios

Implementar un sistema de registro para mantenimientos preventivos y correctivos de equipos de oficina.

- Actor principal: tecnico de mantenimiento.
- Procedimiento: autenticacion previa e ingreso de detalles tecnicos.
- Almacenamiento: registro directo en una base de datos centralizada.

Implicancia para dashboard:

- Formulario para registrar servicio.
- Asociacion obligatoria a equipo o activo.
- Registro de tecnico responsable, fecha, tipo de mantenimiento, hallazgos, repuestos usados y estado final.
- Vista de servicios recientes y pendientes.

### RF-07: Actualizacion de Programas

Gestionar actualizaciones del soporte logico de cada estacion de trabajo.

- Control de versiones: historial de cambios realizados en programas, sistema operativo o aplicaciones clave.
- Seguridad: mitigacion de riesgos mediante parches de seguridad y eliminacion de incompatibilidades.
- Registro: cada actualizacion debe documentar version anterior y nueva version instalada.

Implicancia para dashboard:

- Modulo de software por equipo.
- Registro de versiones instaladas.
- Historial de actualizaciones.
- Alertas por equipos sin actualizacion reciente.
- Campos sugeridos: equipo, software, version anterior, version nueva, fecha, responsable, resultado y observaciones.

### RF-08: Historial de Servicios

Garantizar que toda intervencion quede documentada para futuras consultas y auditorias de rendimiento.

Objetivo: reducir fallas reiterativas y optimizar el ciclo de vida del equipo.

Indicadores presentes en el documento:

- Mantenimientos realizados.
- Equipos auditados.

Parametros de busqueda y control:

- Identificador de equipo: nomenclatura unica por estacion, ejemplo `PC-MP-001`.
- Numero de serie: localizacion exacta del componente fisico intervenido.
- Rango de fechas: filtro temporal para revisiones periodicas.
- Estado final: calificacion del equipo como operativo u observado.

Implicancia para dashboard:

- Buscador por ID de equipo, numero de serie, tecnico, tipo de mantenimiento, fecha y estado final.
- Timeline o tabla historica de intervenciones.
- Indicadores de reincidencia por equipo.
- Filtros por estado: operacional, observado, pendiente u otros estados definidos.

### RF-09: Control de Inventario

Gestion de piezas e inventario TI con trazabilidad desde ingreso a bodega hasta disposicion final.

Datos sensibles obligatorios:

- Numeros de serie.
- Direcciones de red MAC.
- Numeros de parte.

Regla de sistema:

- Prevenir duplicidad de registros para componentes unicos.

Implicancia para dashboard:

- Registro maestro de activos, componentes, perifericos y accesorios.
- Validacion de unicidad para numero de serie, MAC address y numero de parte cuando corresponda.
- Control de stock actual y stock minimo.
- Alertas de stock critico.
- Relacion entre componentes y equipo asociado.
- Ubicacion del activo.

## Protocolos de Seguridad y Revision

| Accion tecnica | Detalle de seguridad |
| --- | --- |
| Mantenimiento fisico | Uso de herramientas antiestaticas y manipulacion delicada |
| Actualizacion de sistemas | Verificacion de integridad y copias de respaldo previo |
| Gestion de inventario | Etiquetado sistematico y control de existencias minimas |
| Verificacion final | Validacion de funcionamiento optimo del equipo del usuario |

## Estructura de Datos Detectada en Excel

Los datos actuales son de prueba; lo relevante son los campos.

### Bitacora_Historial_RF08 (1).xlsx

Hoja: `Historial Mantenimientos`

Campos:

- ID Registro
- Fecha Servicio
- ID Equipo
- Numero de Serie
- Tipo de Mantenimiento
- Detalles de la Intervencion y Hallazgos
- Repuestos Utilizados (Ref. RF-09)
- Tecnico Responsable
- Estado Final

Uso sugerido:

- Tabla `mantenimientos`.
- Relacion con `activos` por ID Equipo y/o Numero de Serie.
- Relacion con `inventario` para repuestos usados.

### Planilla_Inventario_Dinamica_RF09.xlsx

Hoja: `Dashboard Resumen`

Indicadores:

- Total Equipos Registrados
- Total Componentes en Stock
- Total Perifericos y Accesorios
- Alertas de Stock Critico

Hoja: `Inventario_General`

Campos:

- ID Activo / Codigo
- Tipo Registro
- Categoria
- Marca
- Modelo / Especificacion
- Numero de Serie (S/N)
- MAC Address / P/N
- Capacidad / Frecuencia
- Factor Forma / Conector
- Equipo Asociado
- Stock Actual
- Stock Minimo
- Estado
- Ubicacion

Uso sugerido:

- Tabla `activos_inventario`.
- Indices unicos condicionales para serie, MAC o numero de parte.
- Campos calculados para estado de stock.

### Plan_Mantencion_TI_Pyme.xlsx

Hoja: `Cronograma`

Campos:

- ID Tarea
- Semana
- Dia
- Activo / Equipo
- Descripcion de la Tarea
- Responsable
- Prioridad
- Estado

Uso sugerido:

- Tabla `tareas_mantenimiento`.
- Vista tipo calendario/lista operativa.

Hoja: `Lista de Chequeo`

Campos:

- ID Equipo
- Categoria
- Limpieza Fisica
- Actualizacion SW
- Cambio Pasta Termica
- Revision Bateria/UPS
- Diagnostico Disco/RAM
- Observaciones

Uso sugerido:

- Tabla `checklists_mantenimiento`.
- Puede modelarse como checklist fija por equipo o como items normalizados por tarea.

Hoja: `Procedimientos`

Campos:

- Tipo de Activo
- Actividades Detalladas

Procedimientos detectados:

- Servidor: revision de logs, RAID, limpieza de bahias de discos y parches de seguridad.
- Switch de red: limpieza de puertos, temperatura y verificacion de loops de red.
- UPS: prueba de carga de bateria, limpieza de bornes y alertas del software de gestion.
- Equipos PC/NB: soplado interno, limpieza de pantalla/teclado, actualizacion de antivirus y sistema operativo, revision de temperatura CPU.

Uso sugerido:

- Tabla `procedimientos`.
- Plantillas reutilizables para tareas y checklists.

## Modulos Recomendados del Dashboard

- Inicio operativo: resumen general simple, priorizando alertas definidas por la base de datos y un tablero tipo kanban.
- Inventario TI: ventana/seccion basada en la tabla `Inventario_General` del Excel RF-09.
- Historial de mantenimientos: ventana/seccion basada en la tabla `Historial Mantenimientos` del Excel RF-08.
- Planificacion: ventana/seccion basada en la tabla `Cronograma` del plan de mantencion.
- Checklist tecnico: ventana/seccion basada en la tabla `Lista de Chequeo`.
- Procedimientos: ventana/seccion basada en la tabla `Procedimientos`.
- Actualizaciones: seccion para RF-07, orientada a versiones de software y parches por equipo.
- Reportes: exportacion de historial, inventario critico y rendimiento operativo.

## Direccion de Interfaz Aprobada

La interfaz debe ser menos cargada y evitar graficos innecesarios. La pantalla principal no debe intentar mostrar todas las tablas al mismo tiempo.

Lineamientos:

- Cada tabla principal de los Excel debe tratarse como una ventana o seccion independiente.
- La pantalla principal debe mostrar solo resumen general, alertas y accesos por pestañas/secciones.
- Las alertas deben venir de reglas de la base de datos, por ejemplo stock critico, tareas pendientes, equipos observados o mantenimientos vencidos.
- El enfoque visual preferido es tipo kanban, similar a una mesa operativa de mantenimiento.
- Los graficos no son necesarios en la primera version.
- Priorizar lectura rapida, acciones claras y bajo ruido visual.

## Entidades Iniciales para Base de Datos

- `usuarios`: tecnicos, administradores y perfiles de acceso.
- `activos`: equipos principales como PC, notebooks, servidores, switches y UPS.
- `inventario`: componentes, perifericos, accesorios y repuestos.
- `mantenimientos`: intervenciones preventivas y correctivas.
- `mantenimiento_repuestos`: relacion entre mantenimientos y repuestos usados.
- `actualizaciones_software`: cambios de version por equipo.
- `tareas_mantenimiento`: cronograma y planificacion.
- `checklists`: resultados de revision tecnica.
- `procedimientos`: plantillas por tipo de activo.

## Decisiones Pendientes

- Definir si se usara XAMPP/MySQL o una base local embebida para desarrollo inicial.
- Confirmar si el dashboard tendra login real desde la primera version.
- Definir roles: administrador, tecnico, consulta/auditoria.
- Definir estados estandar para equipos, tareas y mantenimientos.
- Elegir propuesta visual del dashboard antes de implementar HTML, CSS y JavaScript.
