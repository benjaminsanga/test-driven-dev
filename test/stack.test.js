class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop() {
        delete this.items[this.top];
        // this.top -= 1;
    }
}

describe('My Stack', () => {

    let stack;

    beforeEach(() => {
        stack = new Stack();
        console.time('create-stack');
    });

    afterEach(() => {
        stack = null;
        console.timeEnd('create-stack');
    });
    
    it('is created empty', () => {

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to the top', () => {
        stack.push('pear');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('pear');
    });

    it('can pop off', () => {
        stack.pop();
        expect(stack.top).toBe(-1);
    });

});