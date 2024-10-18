// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require("../lib/DLL");

function deleteAllNodesWithValue(list, value) {
  // your code here
  let runner = list.head;
  let count = 0;

  while (runner) {
    if (runner.data === value) {
      const nextNode = runner.next;

      if (runner.prev) {
        runner.prev.next = runner.next;
      } else {
        list.head = runner.next;
      }

      if (runner.next) {
        runner.next.prev = runner.prev;
      } else {
        list.tail = runner.prev;
      }

      count++;
      runner = nextNode;
    }
    runner = runner.next;
  }

  list.length -= count;
  return list;
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

console.log(list.print()); // 1 <-> 2 <-> 3 <-> 2 <-> 5
deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5
