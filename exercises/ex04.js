// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");

// [1, 2, 3, 4, 5]

function isPalindrome(queue) {
  // your code here
  const tempQueue = new Queue();
  const tempStack = []; // [5, 4, 3, 2, 1]
  let result = true;
  const size = queue.size();

  for (let i = 0; i < size; i++) {
    const currEl = queue.dequeue(); 
    tempQueue.enqueue(currEl);
    tempStack.push(currEl); 
  }

  for (let i = 0; i < size; i++) {
    const currEl = tempQueue.dequeue();
    const stackEl = tempStack.pop();
    
    if (currEl !== stackEl) {
      result = false;
      break;
    }
  }

  while (!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue());
  }

  return result;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(queue.printQueue());
console.log(isPalindrome(queue)); // true
