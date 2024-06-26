class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
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

        if (!this.isEmpty()) {
            node.next = this.head;
        }
        this.head = node;
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let end = this.head;
            while (end.next) {
                end = end.next;
            }
            end.next = node;
        }
        this.size++;
    }

    insert(value, position) {
        const node = new Node(value);
        if (position > this.size || position < 0) {
            console.log('Invalid Index!');
            return null;
        }
        else if (position === 0) {
            this.prepend(value);
        }
        else {
            let prevNode = this.head;
            for (let i = 0; i < position - 1; i++) {
                prevNode = prevNode.next;
            }
            node.next = prevNode.next;
            prevNode.next = node;
        }
        this.size++;
    }
    remove(index) {
        let removedNode;
        if (index < 0 || index > this.size) {
            console.log('Invalid Index');
            return null;
        }
        else if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prevNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                prevNode = prevNode.next;
            }
            removedNode = prevNode.next;
            prevNode.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }
    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                const removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }
    search(value) {
        if (this.isEmpty()) {
            return 'List Empty!';
        }
        let curr = this.head;
        let i = 0;
        while (curr) {
            if (curr.value === value) {
                return `${value} found at index ${i}`;
            }
            i++;
            curr = curr.next;
        }
        return `${value} not found`;

    }
    print() {
        if (this.isEmpty()) {
            console.log('List is Empty!!');
        } else {
            let current = this.head;
            let listValues = '';
            while (current) {
                listValues += `${current.value} `;
                current = current.next;
            }
            console.log(listValues);
        }
    }
    reverse() {
        if (this.isEmpty()) {
            return 'List Empty';
        }
        let prev = null;
        let current = this.head;
        while (current) {
            let next = current.next;
            prev = current;
            current = next;

        }
    }
}

const list = new LinkedList();

// console.log('List is empty ', list.isEmpty());
// console.log('List size ', list.getSize());
// list.print();

// list.prepend(10);
// list.print();

// list.prepend(20);
// list.prepend(30);
// list.print();

// list.append(100);
// list.print();

list.insert(60, 0);
list.print();

list.insert(10, 1);
list.print();

list.insert(20, 2);
list.print();

list.insert(15, 2);
list.print();

list.insert(40, 4);
list.print();

// list.removeValue(15);
// list.removeValue(40);
// list.removeValue(40);

console.log(list.search(20));