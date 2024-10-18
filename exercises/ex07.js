// Create a function called findMiddle that returns the middle node of a singly linked list
// Tip: Create two runners (one runner moves one node at a time, the other one moves two nodes at a time)

const SLL = require("../lib/SLL");

function findMiddle(list) {
  // your code here
  let runner = list.head; // 1, 2, 3
  let runner2 = list.head; // 1, 3, 5

  while (runner2.next && runner2.next.next) {
    // 4
    runner = runner.next;
    runner2 = runner2.next.next;
  }

  return runner.data;
}

const list = new SLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(4);
list.insertAtBack(5);

console.log(list.print()); // 1 -> 2 -> 3 -> 4 -> 5
console.log(findMiddle(list)); // Output: 3
