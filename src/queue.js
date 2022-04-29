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
class Queue {

  constructor(){
    this.que = [];
  }

  getUnderlyingList() {
    let i;
    let nul = null;
    let leng = this.que.length;
    let tek;
    for(i = leng; i > 0; i--){
      tek = nul;
      nul = {value:this.que[i-1], next: 0};
      nul["next"] =tek;
    } 
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    //console.log(null)
    return nul;
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.que.push(value);
  }

  dequeue() {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
   return this.que.shift();

  }
}

module.exports = {
  Queue
};
