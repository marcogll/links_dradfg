// ══════════════════════════════════════════════════════════
// WEBHOOK PLACEHOLDER
// Reemplaza la URL de abajo con tu webhook real (n8n, Make,
// Zapier, etc.) para recibir los leads donde quieras.
// ══════════════════════════════════════════════════════════
const WEBHOOK_URL = 'https://flows.soul23.cloud/webhook/hCot6x9DsrOJjbL4ciJSQ0Y2';

function submitLead() {
  const nombre = document.getElementById('f-nombre').value.trim();
  const telefono = document.getElementById('f-telefono').value.trim();
  const correo = document.getElementById('f-correo').value.trim();
  const servicio = document.getElementById('f-servicio').value;
  const mensaje = document.getElementById('f-mensaje').value.trim();

  if (!nombre || !telefono || !servicio) {
    alert('Por favor completa tu nombre, teléfono y servicio de interés.');
    return;
  }

  const btn = document.getElementById('lead-btn');
  btn.disabled = true;
  btn.textContent = 'Enviando...';

  // ── META PIXEL: evento Lead ──
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Lead', {
      content_name: servicio,
      content_category: 'Ginecología',
      currency: 'MXN'
    });
  }

  // ── ENVÍO AL WEBHOOK ──
  const payload = { nombre, telefono, correo, servicio, mensaje, fecha: new Date().toISOString() };
  const queryParams = new URLSearchParams(payload).toString();

  fetch(`${WEBHOOK_URL}?${queryParams}`, {
    method: 'GET',
    mode: 'no-cors' // Ignora políticas CORS del navegador
  })
    .then(function () { mostrarExito(); })
    .catch(function () {
      // Si el webhook falla igual mostramos éxito (no bloquear al usuario)
      mostrarExito();
    });
}

function mostrarExito() {
  document.getElementById('lead-form').style.display = 'none';
  document.getElementById('lead-success').style.display = 'block';
}

// ── COOKIE CONSENT ──
function getCookie(name) {
  const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
function setCookie(name, val, days) {
  const d = new Date(); d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + val + ';path=/;expires=' + d.toGMTString();
}

document.addEventListener('DOMContentLoaded', () => {
    if (!getCookie('cookieConsent')) {
    const cookieBanner = document.createElement('div');
    cookieBanner.id = 'cookie-banner';
    cookieBanner.innerHTML = '<p>Este sitio usa cookies para mejorar tu experiencia.</p><button id="cookie-accept">Aceptar</button>';
    document.body.appendChild(cookieBanner);
    document.getElementById('cookie-accept').onclick = function () {
        setCookie('cookieConsent', '1', 365);
        cookieBanner.style.display = 'none';
    };
    }

    // ── ANALYTICS SIMPLE (origen + clics) ──
    const analytics = {
    origen: 'direct',
    fuente: new URLSearchParams(window.location.search).get('utm_source') ||
        document.referrer.includes('facebook') ? 'facebook' :
        document.referrer.includes('google') ? 'google' :
        document.referrer ? 'referral' : 'direct',
    clics: [],
    visitas: 1,
    init: function () {
        const stored = JSON.parse(localStorage.getItem('siteAnalytics') || '{"visitas":0,"clics":[]}');
        this.visitas = stored.visitas + 1;
        this.clics = stored.clics;
        this.save();
    },
    trackClick: function (btn) {
        this.clics.push({ btn: btn, fecha: new Date().toISOString() });
        this.save();
    },
    save: function () {
        localStorage.setItem('siteAnalytics', JSON.stringify({
        visitas: this.visitas,
        origen: this.origen,
        fuente: this.fuente,
        clics: this.clics
        }));
    }
    };
    analytics.init();

    document.querySelectorAll('.link-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        analytics.trackClick(this.querySelector('.btn-text').textContent);
    });
    });
});

// ── PANEL ADMIN ──
function adminLogin() {
  const pass = prompt('Admin: ');
  if (pass === 'dra2024') {
    const data = JSON.parse(localStorage.getItem('siteAnalytics') || '{}');
    alert('Visitas: ' + data.visitas + '\nOrigen: ' + (data.fuente || 'direct') + '\n\nClics:\n' +
      (data.clics || []).map(function (c, i) { return (i + 1) + '. ' + c.btn + ' (' + c.fecha + ')'; }).join('\n'));
  } else if (pass) {
    alert('Incorrecto');
  }
}
