/* llamada de formularios */

const formCalculadora = document.querySelector("#formCalculadora")

const contenedorHTML = document.querySelector(".contenedorResultado")



formCalculadora.addEventListener("submit", (event) =>{
    event.preventDefault()
    const base = formCalculadora.largo.value
    const altura = formCalculadora.altura.value
    const manos = formCalculadora.manos.value
    const m2 = base * altura
    const rendimiento = 10
    const resultado = ( m2 / rendimiento ) * manos
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

const usuarios = []

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
    usuarios.push({
        nombre: formContacto.nombre.value,
        apellido: formContacto.apellido.value,
        telefono: formContacto.telefono.value,
        email: formContacto.email.value,
    })
    renderizarUsuarios()
    formContacto.reset()
})

