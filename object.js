  /*    
const person = {
    name: {
        "First Name": "John",
        last: "Doe"
      },
      age: 30
} // порожній об'єкт

console.log(person.age);


console.log(person.name["First Name"]);

console.log(person["name"]["First Name"]);

person.age = 31;
console.log(person.age);


console.log(person.country);
person.country = "USA"
console.log(person.country);

delete person.age
console.log(person.age);

const user =  new Object();

user.name = "Олександр" 

    


const person = {
     name: "Jhon",
     greet: function() {
        console.log(`Hello, my name is John`);
     }
     }


person.greet();
console.log(person.greet);
console.log(person.name);


const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 40 }
]

console.log(people[0]);
people.push({ name: "Anna", age: 28 });

people[1].age = 26;*/

// Вам потрібно розробити програму для управління списком студентів та їхніх оцінок.
/* 
Є масив студентів, де кожен студент представлений у вигляді об'єкта:
Потрібно написати функцію getStudentReport(students), яка:

    Обчислює середній бал кожного студента.
    Визначає статус студента за таким правилом:
        "Відмінник" – середній бал 90 і більше.
        "Хорошист" – середній бал від 75 до 89.
        "Трійочник" – середній бал нижче 75.
*/
const students = [
    { name: "Іван", grades: [95, 90, 92] },
    { name: "Марія", grades: [80, 85, 78] },
    { name: "Петро", grades: [60, 70, 65] }
]

function getStudentReport(students) {
    return students.map(student => {
        let sum = 0;
        for (let grade of student.grades) {
            sum += grade;
        }
        let average = sum / student.grades.length;
        let status;
        if (average >= 90) {
            status = "Відмінник";
        } else if (average >= 75) {
            status = "Хорошист";
        } else {
            status = "Трійочник";
        }
        return { name: student.name, average: parseFloat(average.toFixed(2)), status };
    });
}
console.log(getStudentReport(students));
