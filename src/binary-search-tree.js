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

    while (true) {
      if (data > currentNode.data) {
        if (!currentNode.rightChild) {
          currentNode.rightChild = node;
          return;
        }
        currentNode = currentNode.rightChild;
      }

      else if (data < currentNode.data) {
        if (!currentNode.leftChild) {
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

    while (current) {

      if (data > current.data) {
        current = current.rightChild;
      }

      else if (data < current.data) {
        current = current.leftChild;
      }

      else if (data === current.data) {
        return true
      }
    }

    return false;
  }

  find(data) {

    let current = this.rootNode;

    while (current) {

      if (data > current.data) {
        current = current.rightChild;
      }

      else if (data < current.data) {
        current = current.leftChild;
      }

      else return current;
    }

    return null;
  }

  min(data = this.rootNode) {

      let current = data;

      while (current) {
          
          if(!current.leftChild) {
              return current.data;
          }
          current = current.leftChild;
      }
  }

  max(data = this.rootNode) {
    
      let current = data;

      while (current) {
          
          if(!current.rightChild) {
              return current.data;
          }
          current = current.rightChild;
      }
  }

  remove(data) {

      if(this.rootNode === null) return null;

      this.rootNode = this._deleteNode(this.rootNode, data);
  }

  _deleteNode(currentNode, itemValue) {
      if(currentNode.data === itemValue) {
          if(currentNode.leftChild === null && currentNode.rightChild === null) {
              return null;
          }

          if(currentNode.leftChild === null) {
              return currentNode.rightChild;
          }

          if(currentNode.rightChild === null){
              return currentNode.leftChild;
          }

          const minNodeInRightSubtree = this._min(currentNode.rightChild);
          currentNode.data = minNodeInRightSubtree.data;

          currentNode.rightChild = this._deleteNode(currentNode.rightChild, minNodeInRightSubtree.data);
          return currentNode;
      }

      if(itemValue < currentNode.data) {
          if(currentNode.leftChild === null) {
              return currentNode
          }

          currentNode.leftChild = this._deleteNode(currentNode.leftChild, itemValue);
          return currentNode;
      }

      if(itemValue > currentNode.data) {
          if(currentNode.rightChild === null) {
              return currentNode
          }

          currentNode.rightChild = this._deleteNode(currentNode.rightChild, itemValue);
          return currentNode;
      }

    
  }

  _min(data = this.rootNode) {

    let current = data;

    while (current) {
        
        if(!current.leftChild) {
            return current;
        }
        current = current.leftChild;
    }
}

  _max(data = this.rootNode) {
  
    let current = data;

    while (current) {
        
        if(!current.rightChild) {
            return current;
        }
        current = current.rightChild;
    }
}
}

module.exports = {
  BinarySearchTree
};