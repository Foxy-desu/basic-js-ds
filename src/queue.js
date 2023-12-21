const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class LinkedListNode {
  constructor(value, next = null){
    this.value = value;
    this.next = next
  }
}

class LinkedList {

  constructor(comparator) {
    this.head = null;
    this.tail = null;

    this.comparator = 
      comparator || 
      function(i, j) {
        if (i < j) return -1;
        if (i > j) return 1;
        return 0;
      }
  }

  deleteHead(){

    if(!this.head) return null;

    let deletedHead = this.head;

    if(this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  // deleteTail(){
  //   const deletedTail = this.tail;

  //   if(this.head === this.tail) {
  //     this.head = null;
  //     this.tail = null;
  //     return deletedTail;
  //   }

  //   let current = this.head;
  //   while(current.next) {
  //       if(!current.next.next) {
  //         current.next = null;
  //       } else {
  //         current = current.next;
  //       }
  //   }

  //   this.tail = current;
  //   return deletedTail;

  // }

  prepend(value) {
    let newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if(!this.tail) this.tail = newNode;
  }

  append(value) {
    let newNode = new LinkedListNode(value);
    if(this.tail) this.tail.next = newNode;
    this.tail = newNode;
    if(!this.head) this.head = newNode;
  }

  // delete(value) {
  //   //if there are no elements in the list;
  //   if(!this.head) return null;

  //   //if there are items, we will replace curr elem with the next element if the value we search and the element match

  //   while (this.head && this.comparator(this.head.value, value) === 0) {
  //     this.head = this.head.next;
  //   }

  //   let current = this.head;

  //   if(current !== null) {
  //     while(current.next) {
  //       if(this.comparator(current.next.value, value) === 0) {
  //         current.next = current.next.next;
  //       } else {
  //         current = current.next;
  //       }
  //     }
  //   }

  //   if(this.comparator(this.tail.value, value) === 0) {
  //     this.tail = current;
  //   }
  // }
}

class Queue {

  constructor() {
    this.linkedList = null;
  }

  getUnderlyingList() {
   return this.linkedList.head;
  }

  enqueue(value) {
    if(!this.linkedList) this.linkedList = new LinkedList();
    return this.linkedList.append(value);
  }

  dequeue() {
    return this.linkedList.deleteHead().value;
  }
}

module.exports = {
  Queue
};
