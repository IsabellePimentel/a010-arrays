const arraysNumeros = [1, 5, 6, 8, 2, 4]
const arrayStrings = ["musica", "dança", "comida"]
const arrayVariedades = [3 ,"cantor", false, 10, "bebida", true]

// Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(arraysNumeros.length)
console.log(arrayStrings.length)
console.log(arrayVariedades.length)

// Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(arraysNumeros[0])
console.log(arrayStrings[1])
console.log(arrayVariedades[2])

// Imprima uma informação booleana verdadeira sobre a inclusão de um item do primeiro array, e uma informação booleana falsa sobre a inclusão de um item ao terceiro array. Isto é, um includes() verdadeiro, e outro falso.
console.log(arraysNumeros.includes(6))
console.log(arrayVariedades.includes("bolas"))