// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

function removeBetween(data, a, b) {
  // your code here
  const tempStack = new Stack();
  let foundA = false;
  let foundB = false;

  while (!data.isEmpty()) {
    const element = data.pop(); // Elderberry

    if (element === b && !foundB) {
      foundB = true;
    }

    if (foundB && !foundA) {
      if (element === a) {
        foundA = true;
      } else if (element !== b) {
        continue;
      }
    }

    tempStack.push(element);
  }

  while (!tempStack.isEmpty()) {
    data.push(tempStack.pop());
  }

  return data;
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween(fruits, "Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry
