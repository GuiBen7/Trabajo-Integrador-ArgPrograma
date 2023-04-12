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
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'exito',
        showConfirmButton: false,
        timer: 1500
    })
    
})


/* Llamada de formulario de contacto */

const formContacto = document.querySelector("#contacto")

/* se llama al  contenedor usuario */

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
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Sus Datos Fueron Registrados',
        showConfirmButton: false,
        timer: 1500
    })
})


