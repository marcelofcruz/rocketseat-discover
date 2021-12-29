// Criando elementos na página

// createElement
const div = document.createElement('div')
div.innerText = 'Olá Marcelo!'
console.log(div)

//append - prepend

const body = document.querySelector('body')
body.append(div)
body.prepend(div)

// insertBefore
const h4 = document.querySelector('h4')
body.insertBefore(div, h4)