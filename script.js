/* carrusel */
const prevBtn = document.querySelector("div.anterior");
const nextBtn = document.querySelector("div.siguiente");
const sectionContainer = document.querySelector("div.carousel-sections");

prevBtn.onclick = anterior;
nextBtn.onclick = siguiente;

let currentIndex = 0;
let slides = [];
let dots = [];

function render() {
  let offset = 0;
  slides.forEach((slide, index) => {
    if (index < currentIndex) {
      offset += slide.offsetWidth;
    }
  });

  sectionContainer.style.transform = `translateX(-${offset}px)`;
  dots.forEach((dot, index) => {
    index === currentIndex
      ? dot.classList.add("active")
      : dot.classList.remove("active");
  });
}

function anterior() {
  if (currentIndex < 0) return;
  currentIndex -= 1;
  render();
}

function siguiente() {
  if (currentIndex === slides.length - 1) return;
  currentIndex += 1;
  render();
}

function goto(newIndex) {
  if (newIndex < 0 || newIndex > slides.length - 1) return;
  currentIndex = newIndex;
  render();
}

function init() {
  const newSlides = document.querySelectorAll("div.carrusel-seccion > div");
  slides = newSlides;

  const newDots = document.querySelectorAll("div.carousel-dots > div");
  newDots.forEach((dot, index) => {
    dot.onclick = () => goto(index);
  });
  dots = newDots;

  render();
}

init();






/* llamada de formulario calculadora */

const formCalculadora = document.querySelector("#formCalculadora")

const contenedorHTML = document.querySelector(".contenedorResultado")



formCalculadora.addEventListener("submit", (event) =>{
    event.preventDefault()

    /* se toman datos desde formulario calculadora */

    const base = formCalculadora.largo.value
    const altura = formCalculadora.altura.value
    const manos = formCalculadora.manos.value

    /* se establecen constantes para realizar proceso */

    const m2 = base * altura
    const rendimiento = 10
    const resultado = ( m2 / rendimiento ) * manos

    /* se imprime resultado */

    contenedorHTML.innerHTML =`
    <div class="resultadojs">
        <h3><font color="black">La cantidad de litros a utilizar es: ${resultado} Litros(Rendimiento por litro 10 m2)   </h3>
    </div>    
    `
    formCalculadora.reset()
    
})

/* Llamada de formulario de contacto */

const formContacto = document.querySelector("#contacto")

const contenedorUsuariosHTML = document.querySelector(".contenedorUsuarios")

/* se crea array de usuarios vacio */

const usuarios = []

/* se crea funcion para llenar el array */

const renderizarUsuarios = () =>{
    contenedorUsuariosHTML.innerHTML = ""
    for(const usuario of usuarios){
        contenedorUsuariosHTML.innerHTML +=`
        <div>
            <h2><b><font color="black">Sus datos fueron grabados correctamente</b></h2>
            <br>
            <p><b>Nombre:   ${usuario.nombre}</b></p>
            <p><b>Apellido:   ${usuario.apellido}</b></p>
            <p><b>Telefono:   ${usuario.telefono}</b></p>
            <p><b>Email:   ${usuario.email}</b></p>
            <br>
        </div>
        `
    }
}

formContacto.addEventListener("submit",(event)=>{
    event.preventDefault()

    /* se toman datos de formulario */
    
    usuarios.push({
        nombre: formContacto.nombre.value,
        apellido: formContacto.apellido.value,
        telefono: formContacto.telefono.value,
        email: formContacto.email.value,
    })
    renderizarUsuarios()
    formContacto.reset()
})

