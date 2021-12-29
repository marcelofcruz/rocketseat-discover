// Navegando pelos elementos
// parentNode - ParentElement
const body = document.querySelector('h1')
console.log('parentNode ->', body.parentNode)
console.log('ParentElement ->', body.parentElement)

// childNodes children
console.log('childNodes ->', body.childNodes)

// firstChild - firstElementChild
console.log('firstChild ->', body.firstChild)
console.log('firstElementChild ->', body.firstElementChild)

// lastChild - lastElementChild
console.log('lastChild ->', body.lastChild)
console.log('lastElementChild ->', body.lastElementChild)

// nextSibling - nextElementSibling
console.log('nextSibling -> ', body.nextSibling)
console.log('nextElementSibling -> ', body.nextElementSibling)

// previuousSibling - previousElementSibling
console.log('previousSibling -> ', body.previousSibling)
console.log('previousElementSibling -> ', body.previousElementSibling)