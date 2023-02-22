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

  kthFromEnd(k) {
    if(k < 0 || k > this.length) {
      return 'Exception';
    }
    let temp = (this.length - 1) - k;
    let current = this.head;
    if(temp === 0){
      return current.value;
    }
    for(let i = 0; i < temp; i++){
      current = current.next;
    }
    return current.value;
  }
}

const zipLists = (list1, list2) => {
  let current1 = list1.head;
  let current2 = list2.head;
  let list3 = new LinkedList();
  while (current1 || current2) {
    if (current1) {
      list3.append(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      list3.append(current2.value);
      current2 = current2.next;
    }
  }
  return list3;
};

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = { LinkedList, zipLists };
