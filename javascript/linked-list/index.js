'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value){
    const oldHead = this.head;
    // this.head = new Node(value, this.head); passing current head to next node (one liner)
    this.head = new Node(value);
    this.head.next = oldHead;
  }

  toString() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }

    return str += 'NULL';
  }
}

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
