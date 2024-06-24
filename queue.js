// class Queue {
//     constructor() {
//         this.item = [];
//     }
//     enqueue(element) {
//         this.item.push(element);
//     }
//     isEmpty() {
//         if (this.item.length === 0) {
//             return true;
//         }
//         return false;
//     }
//     dequeue() {
//         if (!this.isEmpty()) {
//             return this.item.shift();
//         }
//         else {
//             return "Queue Empty";
//         }
//     }
//     peek() {
//         if (!this.isEmpty()) {
//             return this.item[0];
//         }
//         return null;
//     }
//     size() {
//         return this.item.length;
//     }
//     print() {
//         console.log(this.item.toString());
//     }
// }

// const queue = new Queue();

// console.log(queue.isEmpty());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log(queue.peek());
// console.log(queue.size());
// queue.print();
// queue.dequeue();

// console.log(queue.isEmpty());
// console.log(queue.peek());
// console.log(queue.size());
// queue.print();



//using object

class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    isEmpty() {
        return this.rear - this.front === 0;
    }
    peek() {
        return this.items[this.front];
    }
    size() {
        return this.rear - this.front;
    }
    print() {
        console.log(this.items);
    }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek());
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());