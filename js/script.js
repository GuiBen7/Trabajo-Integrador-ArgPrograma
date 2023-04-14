/* llamada de formulario calculadora */

const formCalculadora = document.querySelector("#formCalculadora")
const contenedorHTML = document.querySelector(".contenedorResultado")

/*llamada de formulario registro*/

const formulariosUsuarios= document.querySelector("#RegistroUsuarios")
const contactoRes = document.querySelector(".ContenerUsuarios")

const usuarios = []

/* Formulario Contacto */

const formularioContacto = document.querySelector("#formContacto")
const contenedorContact = document.querySelector(".contenedorConsulta")

// Use el condicional "if" porque la variable formControl no existe en el html de contacto y genera un error. Lo mismo pasa en el html index con la variable formularioUsuarios.

if(formCalculadora) {
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
            title: 'Calculo Realizado',
            showConfirmButton: false,
            timer: 1500
        })
    })
}

/*---------------------formulario Registro------------------------*/

const renderizarUsuarios = () =>{
    contactoRes.innerHTML = ""
    for(const usuario of usuarios){
        contactoRes.innerHTML += `
        <div class= "card-user">
            <h2>nombre: ${usuario.nombre}</h2>
            <h3>apellido: ${usuario.apellido}</h3>
            <p>correoelectronico: ${usuario.correoelectronico}</p>
            <p>contrasena: ${usuario.contrasena}</p>
        </div>    
        `
        Swal.fire(
            'Exito',
            'Usuario Creado ',
            'success'
        )
    }
}

if(formulariosUsuarios) {
    formulariosUsuarios.addEventListener("submit", (event) =>{
        event.preventDefault()
        usuarios.push ({
            nombre: formulariosUsuarios.nombre.value,
            apellido: formulariosUsuarios.apellido.value,
            correoelectronico: formulariosUsuarios.correoelectronico.value,
            contrasena: formulariosUsuarios.contrasena.value
        })
        renderizarUsuarios()
        formulariosUsuarios.reset()

    })
}

/*----------------------Formulario Contacto-------------------------- */

const renderizarContacto = () =>{
    contenedorContact.innerHTML = ""
    for(const usuario of usuarios){
        contenedorContact.innerHTML += `
        <div class= "card-userC">
            <h2><font color="black">Nombre: ${usuario.nombre}</h2>
            <p><font color="black">Correo: ${usuario.correoElectronico}</p>
            <br>
            <p><b><font color="black"> A la brevedad lo contactaremos, muchas gracias!<b/></p>
        </div>    
        `
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Gracias Por Contactarnos',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

if(formularioContacto) {
    formularioContacto.addEventListener("submit", (event) =>{
        event.preventDefault()
        
        usuarios.push ({
            nombre: formularioContacto.nombre.value,
            correoElectronico: formularioContacto.correoElectronico.value,
        })
        renderizarContacto()
        formularioContacto.reset()

    })
}