/*
STACK
Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.

1. Implement Stack Data Structure using string data type
Operations you need to add are
  isEmpty() - returns true if the storage is empty
  push(value) - add a new value and returns the size of the storage
  pop() - remove one element and returns the deleted element
  peek() - displays the last pushed element in the storage
  size() - the size of the storage
*/

// String Implementation
class Stack {
  constructor() {
    this._storage = "";
    this.lastPushedElement = '';
    this.length = 0;
  }
  isEmpty() {
    return this._storage ? false: true
  }

  push(value) {
    this.lastPushedElement = value;
    if(this.size == 0) this._storage = value;
    else {
      this._storage += '*' + value;
    }
    return ++this.length;
    
  }
  pop() {
    this.length -= 1;

    let index = 0;

   for(let i=this._storage.length-1; i>=0; i--)
   if(this._storage[i]=='*') { index = i; break; }

    this._storage = this._storage.split(0,index);
    return ;
  }

  peek() {
   return this.lastPushedElement;
  }
  size() {
    return this.size;
  }
}

// Object Implementation
class Stack {
  constructor(max) {

    this.max = max;
    this.key = 0;
    this.lastElement = '';
    this._storage = {};
  }
  isEmpty() {
    return this.key ==0 ? true : false
  }
  push(value) {

    if(this.key == this.max) {
       console.log('Max capacity already reached');
       return this.key;}

    else {
    this.lastElement = value;
    this._storage[this.key] = value;
    return ++this.key;  
    }

  }
  pop() {
    this.key -=1;
    delete this._storage[this.key];
    return this.lastElement;     
  }
  peek() {
    return this.lastElement;
  }
  size() {
    return this.key;
  }

  contains(value) {

    return Object.values(this._storage).includes(value)

  }
}

// 2. Implement every method given above using the 'object' data type.
// Additionals:
// Modify your stack to take max capacity as a parameter and once you exceed the size it should print message
// "Max capacity already reached"

// Make a method named 'contains' which will return true if any of the value matches the value of object.
// stack.contains('hello') - true or false

// Use This For Testing

// var myStack = new Stack(3);
// console.log(myStack.isEmpty()) // true
// console.log(myStack.push('a'), 'should be 1');
// console.log(myStack.push('b'), 'should be 2');
// console.log(myStack.push('c'), 'should be 3');
// console.log(myStack.push('d'), 'Max capacity already reached');
// console.log(myStack.pop(), 'should be c');
// console.log(myStack.size(), 'should be 2');
// console.log(myStack.peek(), 'should be b');
// console.log(myStack.size(), 'should be 2');
