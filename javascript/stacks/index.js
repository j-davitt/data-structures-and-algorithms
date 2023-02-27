'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    let temp = this.top;
    this.top = this.top.next;
    return temp.value;
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    return!this.top;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  // enqueue(value) {
  //   let newNode = new Node(value);
  //   if(this.front){
  //     this.back.next = newNode;
  //   } else {
  //     this.front = newNode;
  //   }
  //   this.back = newNode;
  // }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
    let temp = this.front;
    this.front = this.front.next;
    return temp.value;
  }

  peek() {
    if (!this.front) {
      return null;
    }
    return this.front.value;
  }

  isEmpty() {
    return!this.front;
  }

}


module.exports = { Stack, Queue };

