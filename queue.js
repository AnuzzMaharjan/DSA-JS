class Queue {
    constructor() {
        this.item = [];
    }
    enqueue(element) {
        this.item.push(element);
    }
    isEmpty() {
        if (this.item.length === 0) {
            return true;
        }
        return false;
    }
    dequeue() {
        if (!this.isEmpty()) {
            return this.item.shift();
        }
        else {
            return "Queue Empty";
        }
    }
    peek() {
        if (!this.isEmpty()) {
            return this.item[0];
        }
        return null;
    }
    size() {
        return this.item.length;
    }
    print() {
        console.log(this.item.toString());
    }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());
console.log(queue.size());
queue.print();
queue.dequeue();

console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.size());
queue.print();