# Be Fitness — React + TypeScript

Migración del proyecto original en PHP (`practicaWM/`) a una SPA con React 19 + TypeScript, usando Vite y React Router.

## Requisitos
- Node.js 18+

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  components/
    Navbar.tsx       -> barra de navegación (antes includes/nav.php)
    Footer.tsx        -> pie de página (antes includes/footer.php)
    Prefooter.tsx      -> galería con hover (antes includes/prefooter.php)
    Layout.tsx        -> envuelve Navbar + <Outlet /> + Footer
  pages/
    Home.tsx          -> antes Index.php
    AboutUs.tsx        -> antes pages/About-us.php
    Clubs.tsx         -> antes pages/Clubs.php
    Trainers.tsx       -> antes pages/Trainers.php
    Contact.tsx        -> antes pages/Contact.php
  styles/
    styles.css         -> CSS original (con 2 errores de sintaxis corregidos
                          para que compile con Vite/Lightning CSS)
public/
  assets/images/        -> imágenes originales (carpeta normalizada a minúsculas)
```

## Rutas

| Página     | Ruta         |
|------------|--------------|
| Home       | `/`          |
| About us   | `/about-us`  |
| Clubs      | `/clubs`     |
| Trainers   | `/trainers`  |
| Contact    | `/contact`   |

## Notas de la migración
- Los `<?php include ... ?>` se convirtieron en componentes React (`Navbar`, `Footer`, `Prefooter`) reutilizados vía `Layout.tsx` y `React Router`.
- El efecto hover con jQuery (`fadeIn`/`fadeOut` sobre `.gallery-item`) se reimplementó con estado de React (`useState` + `onMouseEnter`/`onMouseLeave`), sin dependencia de jQuery.
- El formulario de contacto ahora es un componente controlado (`useState` por campo); falta conectarlo a un backend/API real para el envío.
- Bootstrap 5 se instaló como dependencia npm (`bootstrap`) en vez de cargarse por CDN; se importan su CSS y su bundle JS (necesario para el carrusel, el dropdown y el botón de menú móvil).
- Las rutas de imágenes se normalizaron a `/assets/images/...` (minúsculas) y a rutas absolutas, en vez de las rutas relativas antiguas basadas en la posición del archivo PHP.
