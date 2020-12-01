let fs = require('fs')
let file = fs.readFileSync('input.txt', 'utf-8')
let input = file.split('\n')

let sum
let numbers = []

for(let i = 0; i < input.length; i++){
    let first = Number(input[i])
    for(let j = 0; j < input.length; j++){  
        let second = Number(input[j])
        for(let k = 0; k < input.length; k++){
            let third = Number(input[k])
            if(i != j && i != k && j != k){
                sum = first + second + third
                if(sum == 2020){
                    numbers.push(first)
                    numbers.push(second)
                    numbers.push(third)
                    break
                }
            }
        }
       
        }
    
    if(numbers.length != 0){
        break
    }
}


let result = numbers[0] * numbers[1] * numbers[2]

console.log(result)
