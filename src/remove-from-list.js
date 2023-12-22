const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(head, target) {
  let prev = null;
  let curr = head;
  
  // if(head.value === target && prev === null) {
  //   head = head.next
  // } 
  
  // else if (head.value !== target) {
    while(curr) {
      if(!curr.next) {
        if(curr.value === target) {
          prev.next = null;
        }
        
      }

      // if(curr.value === target && !prev) {
      //   head = head.next;
      // }

      if(curr.value === target) {
        if(head.value !== target){
          prev.next = curr.next;
        } else {
          while(head.value === target) {
            head = head.next
          }
        }
      }

      if(prev && curr.next) {
        if(prev.next.value === target && curr.next.value === target){
          prev.next = curr.next.next || null;
        }
      }
      prev = curr;
      curr = curr.next;
    }
  
  // }


  return head;
}


module.exports = {
  removeKFromList
};
