const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!!this.rootNode) {
      let minNod = this.rootNode;

      while (minNod.left) {
        minNod = minNod.left;
      }

      return minNod.data;
    } else {
      return
    }
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!!this.rootNode) {
      let maxNode = this.rootNode;

      while (maxNode.right) {
        maxNode = maxNode.right;
      }

      return maxNode.data;
    } else {
      return
    }
  }
}

module.exports = {
  BinarySearchTree
};