# Instalacion Local

## Opcion recomendada con XAMPP

1. Iniciar Apache y MySQL desde XAMPP.
2. Copiar o mantener este proyecto dentro de una ruta servida por Apache.
3. Crear la base de datos importando:
   - `database/schema.sql`
   - `database/seed.sql`
4. Revisar credenciales en `api/config.php`.
5. Abrir `http://localhost/HirataDash/index.html` segun la ruta configurada en Apache.

Credenciales por defecto para XAMPP:

- Host: `127.0.0.1`
- Usuario: `root`
- Password: vacio
- Base de datos: `hirata_ti`

## Modo sin base de datos

El frontend incluye datos demo en `assets/js/app.js`. Si la API PHP no responde, la interfaz carga esos datos automaticamente.

Esto permite revisar diseno, navegacion y estructura antes de conectar MySQL.

## Archivos principales

- `index.html`: estructura del dashboard.
- `assets/css/styles.css`: estilos visuales.
- `assets/js/app.js`: interaccion, kanban, pestanas y fallback demo.
- `api/dashboard.php`: endpoint que lee MySQL.
- `database/schema.sql`: estructura de base de datos.
- `database/seed.sql`: datos iniciales de prueba.
