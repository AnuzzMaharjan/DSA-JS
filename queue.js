const LinkedList = require('./linkedListWithTail');

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList();
    }
    enqueue(value) {
        this.list.append(value);
    }
    dequeue() {
        return this.list.removeFromFront();
    }
    peek() {
        return this.list.head.value;
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    getSize() {
        return this.list.getSize();
    }
    print() {
        return this.list.print();
    }
}

const list = new LinkedListQueue();

console.log(list.isEmpty());

list.enqueue(10);
list.enqueue(20);
list.enqueue(30);

list.print();

console.log(list.peek());
console.log(list.getSize());
console.log(list.dequeue());

list.print();
console.log(list.isEmpty());