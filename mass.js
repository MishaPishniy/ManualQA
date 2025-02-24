//const fruits = ['apple', 'banana', 'orange'];
//const numbers = new Array(1, 2, 3, 4, 5);

//const colors = ['red', 'green', 'blue'];
//onsole.log(colors[1]);

const animals = ['cat', 'dog', 'elephant'];
console.log(animals);
animals[1] = 'monkey';
console.log(animals);


const letters = ['a', 'b', 'c', 'd'];
console.log(letters.length);


const fruits = ['apple', 'banana', 'orange'];
const lastIndex = fruits.length - 1;
console.log(fruits[lastIndex]);


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.log(matrix[1][0]);


 // const numbers = [1, 2, 3, 4, 5];
  //  for (let i = 0; i < numbers.length; i++) {
  //  console.log(numbers[i]);
//}

//for (const елемент of масив) {
    // Код, що виконується на кожній ітерації
//} 

const colors = ['red', 'green', 'blue', 'yellow'];
for (const color  of colors) { 
    console.log(color);
}

/// Дан массив чисел. Используя for...of, посчитай сумму всех элементов массива.
/*const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (const num of numbers) {

    sum += num;
} 

console.log(`Сумма всех элементов: ${sum}`);*/


const stack = [1, 2];
console.log(stack);
stack.push(3, 4);
console.log(stack);
const poppedValue = stack.pop();
console.log(poppedValue); 
console.log(stack);

const shiftedValue = stack.shift();
console.log(shiftedValue); 
console.log(stack);

stack.unshift("A")
console.log(stack);



const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
