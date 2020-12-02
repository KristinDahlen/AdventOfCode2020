const fs = require('fs')
let input = fs.readFileSync('input.txt', 'utf-8')
let splittedInput = input.split('\n')

let correctPasswords = 0

for (let i = 0; i < splittedInput.length; i++) {
    let inputLine = splittedInput[i]
    let splitInputLine = inputLine.split(' ')

    //timesAllowed: ['1', '2']
    let timesAllowed = (splitInputLine[0]).split('-')

    //mustContain 'g'
    let mustContain = (splitInputLine[1]).charAt(0)

    let password = splitInputLine[2]

    let counter = 0

    for(let j = 0; j < password.length; j++){
        if(password[j].includes(mustContain)){
           counter ++
        }

    }
    if(counter >= timesAllowed[0] && counter <= timesAllowed[1]){
        correctPasswords ++
    }

}
console.log(correctPasswords);


