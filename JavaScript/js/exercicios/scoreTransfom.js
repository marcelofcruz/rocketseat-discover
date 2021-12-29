/*
    -> Transformar notas escolares

    Crie um algoritimo que transforme as notas do sistema numérico para sistema de notas em caracteres, tipo A, B, C.

    * de 90 para cima - A
    * entre 80 - 89   - B
    * entre 70 - 79   - C
    * entre 60 - 69   - D
    * menor que 60    - F
*/

const scoreTransform = (score) => {
    let scoreFinal

    if (score < 60) {
        scoreFinal = 'F'
    } else if (score >= 60 && score < 70) {
        scoreFinal = 'D'
    } else if (score >= 70 && score < 80) {
        scoreFinal = 'C'
    } else if (score >= 80 && score < 90) {
        scoreFinal = 'B'
    } else if (score >= 90 && score <= 100) {
        scoreFinal = 'A'
    } else {
        scoreFinal = 'Nota inválida!'
    }

    console.log(scoreFinal)
}

scoreTransformer(95)