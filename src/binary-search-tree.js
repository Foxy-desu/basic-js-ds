const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    
    if (!this.rootNode) {
      return null;
    } else {
      return this.rootNode;
    }
  }

  add(data) {

    let node = {
      data: data,
      leftChild: null,
      rightChild: null,
    }

    if (!this.rootNode) {
      this.rootNode = node;
      return;
    }

    let currentNode = this.rootNode;

    while(true) {
      if(data > currentNode.data) {
        if(!currentNode.rightChild) {
          currentNode.rightChild = node;
          return; 
        }
        currentNode = currentNode.rightChild;
      }

      else if (data < currentNode.data) {
        if(!currentNode.leftChild) {
          currentNode.leftChild = node;
          return; 
        }
        currentNode = currentNode.leftChild;
      }
      
      else break;

    }
  }

  has(data) {
    
    let current = this.rootNode;

    while(current) {

      if(data > current.data) {
        current = current.rightChild;
      }

      else if(data < current.data) {
        current = current.leftChild;
      }

      else {
        return true
      }
    }

    return false;
  }

  find(data) {
    
    let current = this.rootNode;
    
    while(current) {

      if(data > current.data) {
        current = current.rightChild;
      }

      else if(data < current.data) {
        current = current.leftChild;
      }

      else return current;
    }

    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

let tree = new BinarySearchTree;

console.log(tree);

module.exports = {
  BinarySearchTree
};