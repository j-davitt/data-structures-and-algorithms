'use strict';

const { Stack, Queue, AnimalShelter, validateBrackets } = require('../');

describe('Stack', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.top.value).toEqual(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
  });

  it('Can successfully pop off a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.top.value).toEqual(2);
  });

  it('Can successfully empty a stack with pop', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toEqual(null);
  });

  it('Can successfully make a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);


    expect(queue.front.value).toEqual(1);
    expect(queue.back.value).toEqual(3);
  });

  it('Can successfully remove from a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();

    expect(queue.front.value).toEqual(2);
    expect(queue.back.value).toEqual(3);
  });

  it('Can add animals to correct queue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('Jordan', 'dog');
    shelter.enqueue('Mr Whiskers', 'cat');
    shelter.enqueue('Lionel', 'dog');

    expect(shelter.dogs.front.name).toEqual('Jordan');
    expect(shelter.cats.front.name).toEqual('Mr Whiskers');
  });

  it('Can remove animals from queue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('Jordan', 'dog');
    shelter.enqueue('Mr Whiskers', 'cat');
    shelter.enqueue('Lionel', 'dog');

    shelter.dequeue('dog');

    expect(shelter.dogs.front.name).toEqual('Lionel');
    expect(shelter.cats.front.name).toEqual('Mr Whiskers');
  });

  it('Can validate brackets', () => {
    let str = '(){}[]';
    let str2 = '(())[]';
    let str3 = '(()';

    expect(validateBrackets(str)).toBeTruthy();
    expect(validateBrackets(str2)).toBeTruthy();
    expect(validateBrackets(str3)).toBeFalsy();
  });

});
