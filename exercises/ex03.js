// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

function insertAfterTarget(data, target, newElement) {
  // your code here
  const tempStack = new Stack();

  while (!data.isEmpty()) {
    const element = data.pop(); // D

    if (element === target) {
      tempStack.push(newElement);
    }

    tempStack.push(element);
  }

  while (!tempStack.isEmpty()) {
    data.push(tempStack.pop());
  }

  return data;
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

console.log(stack.printStack());
insertAfterTarget(stack, "B", "X");
console.log(stack.printStack()); // A B X C D
