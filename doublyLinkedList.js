class Node {
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }
    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        }
        let removedNode = this.head.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;

        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return removedNode;
    }
    removeFrontEnd() {
        if (this.isEmpty()) {
            return null;
        }
        let removedNode = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return removedNode;
    }
    print() {
        if (this.isEmpty()) {
            console.log('List Empty!');
        } else {
            let list = '';
            let curr = this.head;
            while (curr) {
                list += `${curr.value} `;
                curr = curr.next;
            }
            console.log(list);
        }
    }
    printReverse() {
        if (this.isEmpty()) {
            console.log('List Empty!');
        } else {
            let list = '';
            let curr = this.tail;
            while (curr) {
                list += `${curr.value} `;
                curr = curr.prev;
            }
            console.log(list);
        }
    }
}

const doublyList = new DoublyLinkedList();

console.log(doublyList.isEmpty());

doublyList.prepend(10);
doublyList.prepend(20);
doublyList.prepend(30);

doublyList.append(60);
doublyList.append(70);
doublyList.append(80);

doublyList.print();
doublyList.printReverse();

console.log(doublyList.getSize());

console.log(doublyList.removeFromFront());
console.log(doublyList.removeFrontEnd());

doublyList.print();
console.log(doublyList.isEmpty());