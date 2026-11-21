const botonSaludo = document.getElementById("btn-saludo");
const mensajeSaludo = document.getElementById("mensaje-saludo");

const mensajes = [
  "¡Hola! Qué bueno ver tu página web funcionando.",
  "¡Excelente avance! Ya tienes HTML, CSS y JavaScript conectados.",
  "¡Listo para seguir agregando secciones y funciones!"
];

let indice = 0;

if (botonSaludo && mensajeSaludo) {
  botonSaludo.addEventListener("click", () => {
    mensajeSaludo.textContent = mensajes[indice];
    indice = (indice + 1) % mensajes.length;
  });
}