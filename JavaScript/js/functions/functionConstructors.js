/*
    Function() constructor
        * expressão new
        * criar um novo objeto
        * this keyword
*/

function Person(name) {
    this.name = name,
        this.age = 24
}
const marcelo = new Person('Marcelo')
console.log(marcelo)
console.log(`${marcelo.name} tem ${marcelo.age} anos!`)