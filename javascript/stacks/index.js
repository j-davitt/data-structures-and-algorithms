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
    return !this.top;
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
    return !this.front;
  }

}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }
  dequeue() {
    if (this.stack1.isEmpty()) {
      return null;
    } else {
      return this.stack1.pop();
    }
  }

}

class Animal {
  constructor(name, species, next = null) {
    this.name = name;
    this.species = species;
    this.next = next;
  }
}

class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
  }
  enqueue(name, species) {
    let newAnimal = new Animal(name, species);
    if (species === 'cat') {
      if (!this.cats.front) {
        this.cats.front = newAnimal;
        this.cats.back = newAnimal;
      } else {
        this.cats.back.next = newAnimal;
        this.cats.back = newAnimal;
      }
    }
    if (species === 'dog') {
      if (!this.dogs.front) {
        this.dogs.front = newAnimal;
        this.dogs.back = newAnimal;
      } else {
        this.dogs.back.next = newAnimal;
        this.dogs.back = newAnimal;
      }
    }
  }

  dequeue(species) {
    if (species === 'cat') {
      if (!this.cats.front) {
        return null;
      }
      let temp = this.cats.front;
      this.cats.front = this.cats.front.next;
      return temp;
    }
    if (species === 'dog') {
      if (!this.dogs.front) {
        return null;
      }
      let temp = this.dogs.front;
      this.dogs.front = this.dogs.front.next;
      return temp;
    }
    return null;
  }

}


module.exports = { Stack, Queue, PseudoQueue, AnimalShelter };

