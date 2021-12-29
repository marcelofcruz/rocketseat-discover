// Manipulando conteúdos

// textContent
const element = document.querySelector('h2')
element.textContent = 'Angel Cruz'

// innerText
const element1 = document.querySelector('h3')
element1.innerText = 'Marcelo Cruz'

// innerHTML
const element2 = document.querySelector('h4')
element2.innerHTML = "<span style='color:blue'>Benjamin Cruz</span>"

// value
const element3 = document.querySelector('input')
element3.value = 'Digite o seu nome aqui'

// manipulando atributos
const element4 = document.querySelector('h1')
element4.setAttribute('class', 'title')
console.log(element4)

element4.removeAttribute('class')
