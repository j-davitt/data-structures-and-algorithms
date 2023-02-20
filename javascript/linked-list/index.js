'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(value){
    const oldHead = this.head;
    // this.head = new Node(value, this.head); passing current head to next node (one liner)
    this.head = new Node(value);
    this.head.next = oldHead;
    this.length++;
    return this.length;
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

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  append(value) {
    if(!this.head){
      this.insert(value);
      return this.length;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
    this.length++;
    return this.length;
  }

  insertBefore(value, newValue) {
    let current = this.head;
    if(current.value === value){
      this.insert(newValue);
      return this.length;
    }
    while (current.next) {
      if(current.next.value === value){
        let oldNext = current.next;
        current.next = new Node(newValue, oldNext);
        this.length++;
        return this.length;
      } else {
        current = current.next;
      }
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current) {
      if(current.value === value){
        let newNext = current.next;
        current.next = new Node(newValue, newNext);
        this.length++;
        return this.length;
      } else {
        current = current.next;
      }
    }
  }
}

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
