/* llamada de formulario calculadora */

const formCalculadora = document.querySelector("#formCalculadora")

const contenedorHTML = document.querySelector(".contenedorResultado")

/*llamada de formulario contacto*/

const formulariosUsuarios= document.querySelector("#RegistroUsuarios")
const contactoRes = document.querySelector(".ContenerUsuarios")

const usuarios = []

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
        
    })
}

/*formulario contacto */

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
    }

}

if(formulariosUsuarios) {
    formulariosUsuarios.addEventListener("submit", (event) =>{
        event.preventDefault()
        console.log(formulariosUsuarios.nombre.value)
        usuarios.push ({
            nombre: formulariosUsuarios.nombre.value,
            apellido: formulariosUsuarios.apellido.value,
            correoelectronico: formulariosUsuarios.correoelectronico.value,
            contrasena: formulariosUsuarios.contrasena.value
        })
        renderizarUsuarios()
    })
}

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')


// carrusel

punto.forEach( (cadaPunto , i) => {
 
 punto[i].addEventListener('click', () => {

    
    let posicion = i
    
    let operacion = posicion * -33
    
    grande.style.transform = 'translateX' + operacion

    
    punto.forEach( (cadaPunto , i) => {
        punto[i].classList.remove('activo')
    })
    punto[i].classList.add('activo')

    
})
})
