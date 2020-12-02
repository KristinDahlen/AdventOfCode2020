
const fs = require('fs')
let input = fs.readFileSync('input.txt', 'utf-8')
let splittedInput = input.split('\n')

let correctPasswords = 0

for (let i = 0; i < splittedInput.length; i++) {
    let inputLine = splittedInput[i]
    let splitInputLine = inputLine.split(' ')

    //indexes: ['1', '2']
    let numbersArr = (splitInputLine[0].split('-'))
    let indexes = []
    indexes.push(Number(numbersArr[0]))
    indexes.push(Number(numbersArr[1]))


    //mustContain 'g'
    let mustContain = (splitInputLine[1]).charAt(0)

    let password = splitInputLine[2]


    let temp = false

    if (password.charAt(indexes[0] - 1) == mustContain || password.charAt(indexes[1] - 1) == mustContain) {
        temp = true
    }

    if (password.charAt(indexes[0] - 1) == mustContain && password.charAt(indexes[1] - 1) == mustContain) {
        temp = false
    }
    if(temp){
        correctPasswords++
    }

}
console.log(correctPasswords);
