/* ===== CONFIGURAÇÃO ===== */
const CONFIG = {
  whatsapp: "5500000000000",   // DDI + DDD + número, só dígitos. Ex.: 5567999999999
  mensagem: "Olá! Vim pelo site e quero saber mais sobre o acompanhamento."
};

/* botões de WhatsApp */
document.querySelectorAll('[data-wa]').forEach(function(a){
  var msg = a.getAttribute('data-msg') || CONFIG.mensagem;
  a.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(msg);
  a.target = '_blank'; a.rel = 'noopener';
});

/* faixas em movimento */
document.querySelectorAll('.track').forEach(function(t){
  var s = t.getAttribute('data-text'), html = '';
  for (var i = 0; i < 16; i++) html += '<span>' + s + ' •</span>';
  t.innerHTML = html;
});

/* ano no rodapé */
document.getElementById('ano').textContent = new Date().getFullYear();
