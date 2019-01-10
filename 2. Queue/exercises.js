/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.

1. Implement Queue Data Structure using String
  Operations you need to add are
    * enqueue(value) - add a new value and returns the size of the storage
    * isEmpty() - returns true if the storage is empty
    * dequeue() - remove one element and returns the deleted element
    * peek() - displays the latest element in the storage
    * size() - the size of the storage
*/

// String implementation
class QueueString {
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
      this._storage = '*' + value + this._storage;
    }
    return ++this.length;
  }

  pop() {
    this.length -= 1;
    let index = 0;

   for(let i = 0; i<this._storage.length; i++)
   if(this._storage[i]=='*') { index = i; break; }
   let last =  this._storage.slice(0,index);

   this._storage = this._storage.slice(index+1,this._storage.length);
  
    return last;
  }

  peek() {
   return this.lastPushedElement;
  }
  size() {
    return this.length;
  }
}

// Object Implementation
class QueueObject {
    constructor(max) {

      this.max = max;
      this.key = 0;
      this.lastElement = '';
      this._storage = {};
    }
    isEmpty() {
      return this.key == 0 ? true : false
    }
    push(value) {
  
      if(this.key == this.max) {
         console.log('Max capacity already reached');
         return this.key;}
  
      else {

      this.lastElement = value;

      for(let i = this.key; i>0; i-- ) {

        this._storage[i] = this._storage[i-1];
      }

      this._storage[0] = value;
      return ++this.key;  

      }
  
    }

    pop() {
      this.key -=1;
      let last = this._storage[this.key];
      delete this._storage[this.key];
      return last;     
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

/*
Implement all above methods using Object data type
  Additionals:
    1. Modify your queue to take max capacity as a parameter and once you exceed the size it should
    print message "Max capacity already reached"
    2. Make a method named 'contains' which will return true if any of the value matches the value of object.
    queue.contains('hello') - true or false
    3. Write a method named sort() which sorts by value
*/

// Use for testing
// var myQueue = new Queue(3);
// console.log(myQueue.enqueue('a'), 'should be 1');
// console.log(myQueue.enqueue('b'), 'should be 2');
// console.log(myQueue.enqueue('c'), 'should be 3');
// console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
// console.log(myQueue.dequeue(), 'should be a');
// console.log(myQueue.count(), 'should be 2');
// console.log(myQueue.peek(), 'should be b');
// console.log(myQueue.count(), 'should be 2');
// console.log(myQueue.contains('b'), 'should be true');
// console.log(myQueue.contains('d'), 'should be false');
// console.log(myQueue._storage, myQueue._head);
// console.log(myQueue.until('b'), 'should be 1');
// console.log(myQueue.until('c'), 'should be 2');
// console.log(myQueue.until('d'), 'should be null');
