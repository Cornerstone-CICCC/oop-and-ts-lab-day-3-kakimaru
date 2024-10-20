// Create a function called storeCatalog that returns an object with 3 properties:
// - products (object with product names as keys and no. of instances of the product)
// - totalPrice
// - mostExpensive
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");

function storeCatalog(queue) {
  // your code here
  const tempQueue = new Queue();
  let mostExpensivePrice = 0;
  const result = {
    products: {},
    totalPrice: 0,
    mostExpensive: "",
  };

  while (!queue.isEmpty()) {
    const element = queue.dequeue(); // { product: 'Milk', price: 10 }

    if (result.products[element.product]) {
      result.products[element.product]++;
    } else {
      result.products[element.product] = 1;
    }

    result.totalPrice += element.price;

    if (element.price > mostExpensivePrice) {
      mostExpensivePrice = element.price;
      result.mostExpensive = element.product;
    }

    tempQueue.enqueue(element);
  }

  while (!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue());
  }

  return result;
}

const store = new Queue();
store.enqueue({ product: "Milk", price: 10 });
store.enqueue({ product: "Soap", price: 5 });
store.enqueue({ product: "Cereal", price: 12 });
store.enqueue({ product: "Milk", price: 10 });
store.enqueue({ product: "Shampoo", price: 7 });
store.enqueue({ product: "Broom", price: 25 });
store.enqueue({ product: "Cereal", price: 9 });

const result = storeCatalog(store);
console.log(result);
// {
//   products: {
//     "Milk": 2,
//     "Soap": 1,
//     "Cereal": 2,
//     "Shampoo": 1,
//     "Broom": 1
//   },
//   totalPrice: 78,
//   mostExpensive: "Broom"
// }
