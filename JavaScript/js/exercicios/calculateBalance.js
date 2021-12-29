/* 
    ### Sistema de gastos familiar 

    Crie um objeto que possuirá 2 propriedades, ambas do tipo
    array:
        * receitas: []
        * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [2000, 2000],
    expenses: [1350, 80, 110, 600]
}

const sum = (array) => {
    let total = 0

    for (let value of array) {
        total += value
    }

    return total
}

const calculateBalance = () => {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    if (total > 0) {
        return `O saldo da família é positivo: R$${total.toFixed(2)}`
    } else {
        return `O saldo da família é negativo: R$${total.toFixed(2)}`
    }
}

console.log(calculateBalance())