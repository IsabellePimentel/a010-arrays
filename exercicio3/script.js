const arraysNumeros = [1, 5, 6, 8, 2, 4]
const arrayStrings = ["musica", "dança", "comida"]
const arrayVariedades = [3 ,"cantor", false, 10, "bebida", true]

const arraysNumerosCopia = arraysNumeros.slice()
const arrayStringsCopia = arrayStrings.slice()
const arrayVariedadesCopia = arrayVariedades.slice()


//Adicione um item number ao primeiro array. Utilize console.log() para exibir o original e a cópia;
arraysNumerosCopia.push(7)
console.log("Original", arraysNumeros)
console.log("Cópia", arraysNumerosCopia)

// Remova o último item do segundo array. Utilize console.log() para exibir o original e a cópia;
arrayStringsCopia.pop()
console.log("Original", arrayStrings)
console.log("Cópia", arrayStringsCopia)

// Remova o segundo item do terceiro array. Utilize console.log() para exibir o original e a cópia;
arrayVariedadesCopia.splice(1,1)
console.log("Original", arrayVariedades)
console.log("Cópia", arrayVariedadesCopia)