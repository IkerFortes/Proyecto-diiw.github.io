// Cuenta atrás opcional (ejemplo: 1h)
const reloj = document.getElementById("reloj");
const fin = new Date(Date.now() + 60 * 60 * 1000); // +1h

function actualizarReloj() {
  const diff = fin - new Date();
  if (diff <= 0) {
    reloj.textContent = "¡Ya casi volvemos!";
    return;
  }
  const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
  const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
  const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
  reloj.textContent = `Volvemos en ${h}:${m}:${s}`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();
