// Task #1
class BaseStorage {
    #storage;

    constructor(maxSize = 10) {
        if (maxSize <= 0 && typeof maxSize !== "number" && !Number.isInteger(maxSize)) {
            throw new Error("Invalid maxSize!");
        }
        this.#storage = [];
        this.maxSize = maxSize;
    }

    isEmpty() {
        return this.#storage.length === 0;
    }

    isFull() {
        return this.storage.length >= this.maxSize;
    }

    toArray() {
        return [...this.#storage];
    }

    get storage() {
        return this.#storage;
    }

}


// Task 2

class Stack extends BaseStorage {
    push(elem) {
        if (this.isFull()) {
            throw new Error("Stack is full!");
        }
        this.storage[this.storage.length] = elem;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty!");
        }
        const lastEl = this.storage[this.storage.length - 1];
        this.storage.length -= 1;
        return lastEl;
    }

    peek() {
        return this.isEmpty() ? null : this.storage[this.storage.length - 1];
    }

    static fromIterable(iterable) {
        if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
            throw new Error("Invalid iterable!");
        }
        const instance = new Stack(iterable.length);
        for (const elem of iterable) {
            instance.push(elem);
        }
        return instance;
    }
}


// Task 3
class Queue extends BaseStorage {
    add(elem) {
        if (this.isFull()) {
            throw new Error("Queue is full!");
        }
        this.storage[this.storage.length] = elem;
    }

    shift() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty!");
        }
        const firstEl = this.storage[0];
        for (let i = 1; i < this.storage.length; i++) {
            this.storage[i - 1] = this.storage[i];
        }
        this.storage.length -= 1;
        return firstEl;
    }

    peek() {
        return this.isEmpty() ? null : this.storage[0];
    }

    static fromIterable(iterable) {
        if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
            throw new Error("Invalid iterable!");
        }
        const instance = new Queue(iterable.length);
        for (const elem of iterable) {
            instance.add(elem);
        }
        return instance;
    }
}