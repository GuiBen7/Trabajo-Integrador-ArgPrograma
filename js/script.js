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
    <div>
        <h3>La cantidad de litros a utilizar es: ${resultado} Litros(* Rendimiento por litro 10 m2)</h3>
    </div>    
    `

    
})