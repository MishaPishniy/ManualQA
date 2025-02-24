const result = calculateParam(1,2,3)
console.log(result)

function calculateParam (a ,b ,c ) {
    const sum = a + b + c 
    return sum
}




const result2 = calculateParam(5,7,8)
console.log(result2)


const pow = function (number) {
    return number ** 2;
  }


  const pow2 = (number2) =>  number ** 2;

  function pow3 (number3){
    const sum2 = number3 **2
    return sum2
  }


  //параметр
  function greet(name = 'guest') {
    console.log(`Hello, ${name}`)
  }

  //аргумент
  greet('Anna')
  greet()