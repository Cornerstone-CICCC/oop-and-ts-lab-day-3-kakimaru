// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require('../lib/Stack')

function calcDistance(data, a, b) {
  const tempStack = new Stack();
  let indexA = -1;
  let indexB = -1;
  let count = 0;

  while (!data.isEmpty()) {
    const element = data.pop();
    tempStack.push(element)
    
    if (element === a) {
      indexA = count;
    } else if (element === b) {
      indexB = count;
    }

    count++;
  }

  
  while (!tempStack.isEmpty()) {
    data.push(tempStack.pop());
  }

  if (indexA !== -1 && indexB !== -1) {
    return Math.abs(indexA - indexB);
  }

  return -1;
}

const students = new Stack()
students.push("John")
students.push("Joe")
students.push("Jane")
students.push("Jill")
students.push("Jim")

console.log(students.printStack())

const distance = calcDistance(students, "Joe", "Jim")
console.log(distance) // 3
const distance2 = calcDistance(students, "Joe", "Jill")
console.log(distance2) // 2
