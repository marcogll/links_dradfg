<div align="center">

<img src="https://soul23.mx/logo/soul23_logo.svg" width="90" alt="Soul23">

# Dra Dflores

Software project for business operations ⚙️

<p>
    <img src="https://img.shields.io/badge/Docker-111111?style=flat-square&logo=docker&logoColor=white" alt="Docker">

</p>

</div>

---

<h1 align="center">links_dradfg.git</h1>




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

