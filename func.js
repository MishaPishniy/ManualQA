function calculateSum (param1 , param2, param3) {
    const sum = param1 + param2 + param3
    return sum
}


const result = calculateSum(1,2,3)
console.log(result)

const resul2 = calculateSum(13,12,43)
console.log(resul2)


const pow = function (number) {
    return number*2
}
console.log( pow(2) )

const pow2 = (number2) => number2 * 2
console.log(pow2(3))

//параметр
function grateName (name = 'gest') {
    console.log(`Привіт , ${name}`)
}
//аргумент
grateName()
grateName('Anna')

//Напишіть тіло функції add що приймає два числа в якості параметрів та має повертати їх суму

function add(a,b) {
    return a + b
}
console.log(add(2,3)) 

const add1 = (a1,b1) => a1 + b1
console.log(add1(10,7))


//Завдання: Імплементуйте функцію isEven, 
// яка приймає число і повертає true, якщо число парне, і false, якщо число непарне.

function isEven (number3) {
    return number3 % 2 === 0 
}

console.log(isEven(4))
console.log(isEven(7))

const isEven2 = (number4) => number4 % 2 === 0
console.log(isEven2(9))
console.log(isEven2(6))