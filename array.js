const fruits = ['apple', 'banana', 'orange'];




const animals = ['cat', 'dog', 'elephant'];
console.log(animals[0]);
console.log(animals);
animals[0] = 'monkey';
console.log(animals[0]);
console.log(animals);
console.log(animals.length)
let lastIndex = animals.length - 1;
console.log(lastIndex)


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.log(matrix[1][1])
  

  /* const numbers = new Array(1, 2, 3, 4, 5);
  for (let i = 0; i < numbers.length; i++)
    {
    console.log(numbers[i])
  }


 for (const елемент of масив) {
    // Код, що виконується на кожній ітерації
} */


    
const colors = ['red', 'green', 'blue'];
for ( const color of colors) {
    console.log(color)
}

const stack = [1, 2];
console.log(stack)
stack.push(3, 4);
console.log(stack)
const poppedValue = stack.pop();
console.log(poppedValue);
console.log(stack)
const shiftedValue = stack.shift();
console.log(shiftedValue);
console.log(stack)
stack.unshift(0)
console.log(stack)


const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((numbers) => numbers%2===0)
console.log(evenNumbers)