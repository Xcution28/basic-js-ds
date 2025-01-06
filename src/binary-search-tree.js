const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    rootNode = null;

  root() {
      return this.rootNode;
  }

  add(data) {
      const newNode = new Node(data);
      if (this.rootNode === null) {
          this.rootNode = newNode;
      } else {
          let current = this.rootNode;
          while (true) {
              if (data < current.data) {
                  if (current.left === null) {
                      current.left = newNode;
                      break;
                  } else {
                      current = current.left;
                  }
              } else {
                  if (current.right === null) {
                      current.right = newNode;
                      break;
                  } else {
                      current = current.right;
                  }
              }
          }
      }
  }

  has(data) {
      let current = this.rootNode;
      while (current !== null) {
          if (data === current.data) {
              return true;
          } else if (data < current.data) {
              current = current.left;
          } else {
              current = current.right;
          }
      }
      return false;
  }

  find(data) {
      let current = this.rootNode;
      while (current !== null) {
          if (data === current.data) {
              return current;
          } else if (data < current.data) {
              current = current.left;
          } else {
              current = current.right;
          }
      }
      return null;
  }

  remove(data) {
      const removeNode = (node, data) => {
          if (node === null) {
              return null;
          }
          if (data === node.data) {
              if (node.left === null && node.right === null) {
                  return null;
              }
              if (node.left === null) {
                  return node.right;
              }
              if (node.right === null) {
                  return node.left;
              }
              let tempNode = node.right;
              while (tempNode.left !== null) {
                  tempNode = tempNode.left;
              }
              node.data = tempNode.data;
              node.right = removeNode(node.right, tempNode.data);
              return node;
          } else if (data < node.data) {
              node.left = removeNode(node.left, data);
              return node;
          } else {
              node.right = removeNode(node.right, data);
              return node;
          }
      };
      this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
      if (this.rootNode === null) {
          return null;
      }
      let current = this.rootNode;
      while (current.left !== null) {
          current = current.left;
      }
      return current.data;
  }

  max() {
      if (this.rootNode === null) {
          return null;
      }
      let current = this.rootNode;
      while (current.right !== null) {
          current = current.right;
      }
      return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
