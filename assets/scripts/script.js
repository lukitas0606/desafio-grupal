// Variables y Elementos HTML
const precioArticulo = 40000;
const cantidadInputEl = document.querySelector("#cantidad");
const colorEl = document.querySelector("#color");
const precioResumenEl = document.querySelector("#summaryPrice");
const cantidadResumenEl = document.querySelector("#summaryQuantity");
const colorResumenEl = document.querySelector("#summaryColor");
const formulario = document.querySelector("#form");

// Funciones
function actualizarTotal() {
  const total = cantidadInputEl.value* precioArticulo;
  precioResumenEl.textContent = total;
}

function actualizarCantidad() {
  const cantidad = cantidadInputEl.value;
  cantidadResumenEl.textContent = cantidad;
}

function actualizarColor() {
  const color = colorEl.value;
  colorResumenEl.style.backgroundColor = color;
}

function manejarFormulario(evento) {
  evento.preventDefault();
  actualizarTotal();
  actualizarCantidad();
  actualizarColor();
}

// Eventos
formulario.addEventListener("submit", manejarFormulario);
