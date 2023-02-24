'use strict';

const { Stack, Queue } = require('../');

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

});
