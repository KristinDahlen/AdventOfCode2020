let fs = require('fs')
let file = fs.readFileSync('input.txt', 'utf-8')
let input = file.split('\n')

let sum
let twoNumbers = []

for(let i = 0; i < input.length; i++){
    let current = Number(input[i])
    for(let j = 0; j < input.length; j++){
        if(i != j){
            sum = current + Number(input[j])
            if(sum == 2020){
               twoNumbers.push(Number(input[i]))
               twoNumbers.push(Number(input[j])) 
                break
            }
        }
    }
    if(twoNumbers.length != 0){
        break
    }
}

let result = twoNumbers[0] * twoNumbers[1]

console.log(result);
