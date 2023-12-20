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
    
    return this.rootNode;
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

  remove(data) {
  let targetNode = this.find(data);

  if(targetNode === null) {
    return null;
  }

  if (targetNode.leftChild === null && targetNode.rightChild === null) {
    return targetNode = null;
  }

  if (targetNode.leftChild) {
    if(!targetNode.rightChild) {
      return targetNode = targetNode.leftChild;
    }
  }

  if (targetNode.rightChild) {
    if (!targetNode.leftChild) {
      return targetNode = targetNode.rightChild;
    }
  }

  if (targetNode.leftChild && targetNode.rightChild) {
    let left = targetNode.leftChild;
    targetNode = targetNode.rightChild;
    targetNode.leftChild = left;
    return targetNode;
  }
}


  min() {

    let current = this.rootNode;

    while (current) {

      if (!current.leftChild) {
        return current.data;
      }
      else {
        current = current.leftChild;
      }
    }
  }

  max() {
    
    let current = this.rootNode;

    while (current) {

      if (!current.rightChild) {
        return current.data;
      }
      current = current.rightChild;
    }
  }
}

module.exports = {
  BinarySearchTree
};