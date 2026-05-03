<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://soul23.mx/logo/s23_logo_wh.png">
    <img src="https://soul23.mx/logo/s23_logo_blk.png" alt="Soul23" width="110">
  </picture>
</p>

<h1 align="center">links_dradfg.git</h1>

<p align="center">
  Landing page profesional para ginecóloga en Saltillo, Coahuila. Diseño móvil-first con formulario de captura de leads.
</p>

<p align="center">
  [![Docker](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://github.com/marcogll)
</p>


## Estructura

```
/
├── index.html    # Página principal
├── main.js      # Lógica (leads, analytics, admin)
├── style.css    # Estilos
└── src/img/     # Imágenes (logo, foto de perfil)
```

## Características

- Perfil profesional con rating de Doctoralia
- Enlaces a Instagram, Doctoralia, WhatsApp, ubicación
- Dos consultorios con información de contacto
- Formulario de captura de leads con webhook
- Integración Meta Pixel (evento Lead)
- Analytics básico (visitas, clics, origen)
- Panel admin (contraseña: `dra2024`)

## Configuración

### Meta Pixel
Reemplaza `TU_PIXEL_ID` en `index.html` líneas 32 y 37.

### Webhook de leads
Edita `main.js` para usar tu webhook (n8n, Make, Zapier). El formulario envía los datos por `POST` como `application/x-www-form-urlencoded`.

### Deploy
Simplemente sube los archivos a cualquier hosting estático (Netlify, Vercel, GitHub Pages, hosting tradicional).

## Tech

- HTML5, CSS3, Vanilla JS
- Google Fonts (Inter, Playfair Display)
- Sin dependencias externas
