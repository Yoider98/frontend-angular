# FrontendAngular

Este proyecto es una aplicación Angular para la gestión y visualización de libros. Permite filtrar, listar, ver detalles y eliminar libros, así como realizar scraping de nuevos libros desde el backend.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Yoider98/frontend-angular.git
   cd frontend-angular
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```

## Scripts principales

- `npm start` — Inicia el servidor de desarrollo en `http://localhost:4200/`.
- `npm run build` — Compila la aplicación para producción.
- `npm test` — Ejecuta los tests unitarios.

## Estructura de rutas

| Ruta         | Componente                  | Propósito                                                                 |
|--------------|----------------------------|--------------------------------------------------------------------------|
| `/`          | [`HomeComponent`](src/app/pages/home/home.component.ts) | Página principal. Permite filtrar libros, iniciar scraping y muestra la lista de libros. |

## Componentes principales

- [`BookListComponent`](src/app/features/book-list/book-list.component.ts): Muestra la lista de libros filtrados.
- [`BookDetailModalComponent`](src/app/features/book-detail-modal/book-detail-modal.component.ts): Modal para ver detalles y eliminar un libro.
- [`BookFiltersComponent`](src/app/features/book-filters/book-filters.component.ts): Permite filtrar libros por categoría y precio.
- [`BookCardComponent`](src/app/shared/book-card/book-card.component.ts): Tarjeta individual de libro (puede usarse en otras vistas).
- [`ButtonComponent`](src/app/shared/button/button.component.ts): Botón reutilizable.

## Flujo de la aplicación

1. El usuario accede a la página principal `/`.
2. Puede filtrar libros por categoría y precio.
3. Puede iniciar el scraping de libros desde el backend.
4. La lista de libros se actualiza automáticamente.
5. Puede ver detalles de cada libro en un modal y eliminarlo si lo desea.

## Backend

La aplicación se conecta a un backend en `http://localhost:3000` para obtener, eliminar y scrapear libros.

## Contacto

Para dudas o sugerencias, abre un issue en el repositorio.

---
