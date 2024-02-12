// indices.js
function arraymaxemin(array) {
    let indiceMaior = 0;
    let indiceMenor = 0;
    let maiorValor = array[0];
    let menorValor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorValor) {
            maiorValor = array[i];
            indiceMaior = i;
        }
        if (array[i] < menorValor) {
            menorValor = array[i];
            indiceMenor = i;
        }
    }

    return { indiceMaior, indiceMenor };
}

module.exports = arraymaxemin;
