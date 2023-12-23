const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement;
  }

  add(data) {
    this.rootElement = addElement(this.rootElement, data);

    function addElement(node, data) {
      if (node === null) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addElement(node.left, data);
      } else {
        node.right = addElement(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    function searchElement(node, data) {
      if (node === null) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchElement(node.left, data);
      } else {
        return searchElement(node.right, data);
      }
    }
    return searchElement(this.rootElement, data);
  }

  find(data) {
    function searchElement(node, data) {
      if (node === null) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return searchElement(node.left, data);
      } else {
        return searchElement(node.right, data);
      }
    }
    return searchElement(this.rootElement, data);
  }

  remove(data) {
    this.rootElement = removeElement(this.rootElement, data);

    function removeElement(node, data) {
      if (node === null) {
        console.log('null')
        return null;
      }

      if (data < node.data) {
        node.left = removeElement(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeElement(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeElement(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (this.rootElement === null) {
      return;
    }

    let element = this.rootElement;

    while (element.left) {
      element = element.left;
    }

    return element.data;
  }

  max() {
    if (this.rootElement === null) {
      return;
    }

    let element = this.rootElement;

    while (element.right) {
      element = element.right;
    }

    return element.data;
  }
}

const tree = new BinarySearchTree();

function createTree() {
  tree.add(9);
  tree.add(14);
  tree.add(54);
  tree.add(2);
  tree.add(6);
  tree.add(8);
  tree.add(31);
  tree.add(1);
}
function getElements() {
  console.log(tree.has(8));
  tree.remove(8);
  console.log(tree.has(8));
  console.log(tree.min());
  console.log(tree.max());
}
createTree();
getElements();
module.exports = {
  BinarySearchTree
};