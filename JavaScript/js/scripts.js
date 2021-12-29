// Eventos
function alerta() {
    const msg = 'HEYY!'
    alert(msg)
}

const h2 = document.querySelector('h2')
h2.addEventListener('click', alerta)

// argumento event
const input = document.querySelector('input')

input.onclick = function (event) {
    console.log(event)
}