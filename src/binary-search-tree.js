const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor(data/* , left = null, right = null */) {

   this.data = data;

   this.left = null;

   this.right = null;
  }
}
module.exports = class BinarySearchTree {
  constructor() {
    this.roots = null;
  }

  root ()  { 
   return this.roots;
  }

  add(data) {
    const node = this.roots;

    if (node === null) {
      this.roots = new Node(data);
      return;
    } else {
      const searchTree = function(node) {

        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        }
         else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }

        } else {
          return null;
        }
      };

      return searchTree(node);
    }
  }

  has(data) {
    let curr = this.roots;
           while (curr) {
                if (data === curr.data) {
                  return true;
                  }
               if (data < curr.data) {
                  curr = curr.left;
                } else {
                  curr = curr.right;

      }
    }
    return false;
  }


  find(data) {
    let curr = this.roots;

    while(curr.data !== data){
      if(data < curr.data){
        curr = curr.left;
      }else{
        curr = curr.right;
        
      }

      if (curr === null) return null;
    }
    return curr;
  }


  remove(data) {


   

   const removeNode = function (node, data) {
      if (!node) { 
        return null;
      }

      if (data == node.data) {
                  if(node.left == null && node.right == null){
                  return null;
                  }
                  if(node.left == null){
                  return node.right;
                  }
                  if(node.right == null){
                      return node.left;
                  }
                  var tempNode = node.right;
                  while(tempNode.left !== null){
                  tempNode = tempNode.left;
                  }
                  node.data = tempNode.data;
                  node.right = removeNode(node.right, tempNode.data);
                  return node;
     } else if (data < node.data){
      node.left = removeNode(node.left, data);
      return node;

     }else{
      node.right = removeNode(node.right, data);
      return node;

       }
  }
    this.roots = removeNode(this.roots,data);
  }

  min() {
 let curr =this.roots;

 while(curr.left !== null){
   curr = curr.left;
 }
 
 return curr.data;
  }

  max() {
    let curr =this.roots;

    while(curr.right !== null){
      curr = curr.right;
    }

    return curr.data;
  }
};


