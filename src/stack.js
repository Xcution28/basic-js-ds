/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    push(element) {
        this.items[this.size] = element;
        this.size++;
    }

    pop() {
        if (this.size === 0) {
            return undefined;
        }
        this.size--;
        const element = this.items[this.size];
        this.items[this.size] = undefined;
        return element;
    }

    peek() {
        if (this.size === 0) {
            return undefined;
        }
        return this.items[this.size - 1];
    }
}

module.exports = {
  Stack
};
