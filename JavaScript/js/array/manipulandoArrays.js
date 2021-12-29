
// Maniplando Arrays

let techs = ['html', 'css', 'js']

// adicionar um item no fim do array
techs.push('node.js')

// adicionar no começo
techs.unshift('flutter')

// remover do fim
// techs.pop()

// remover do começo
// techs.shift()

//pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))

// remover 1 ou mais items em qualquer posição do array
// techs.splice(1, 2)

// encontrar a posição de um elemento no array
let index = techs.indexOf('flutter')
techs.splice(index, 1)

console.log(techs)