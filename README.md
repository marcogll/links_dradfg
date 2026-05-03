<div align="center">

<a href="https://soul23.mx">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/marcogll/mg_data_storage/refs/heads/main/soul23/logo/soul23_logo_wh.png">
  <img src="https://raw.githubusercontent.com/marcogll/mg_data_storage/refs/heads/main/soul23/logo/soul23_logo_blk.png" alt="Soul23" width="110">
</picture>
</a>

</div>

# Dra Dflores

Proyecto de software para operaciones empresariales ⚙️

<p>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Español-111111?style=flat-square&logo=googletranslate&logoColor=white" alt="Español">
  <img src="https://img.shields.io/badge/website-111111?style=flat-square&logo=github&logoColor=white" alt="Website">
</p>

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



