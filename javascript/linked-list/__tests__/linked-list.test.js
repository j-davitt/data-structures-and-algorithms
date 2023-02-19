'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should insert at the beginning of empty', () => {
    const list = new LinkedList();
    list.insert('apple');

    expect(list.head.value).toEqual('apple');
    expect(list.head.next).toBeNull();
  });

  it('should insert at the beginning of populated list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');

    expect(list.head.value).toEqual('orange');
    expect(list.head.next.value).toEqual('apple');
    expect(list.head.next.next).toBeNull();
  });

  it('should display as string properly', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');

    const linkedString = list.toString();

    expect(linkedString).toEqual('{ orange } -> { apple } -> NULL');

  });

  it('should indicate whether a given value exists in the list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insert('cherry');
    list.insert('grape');

    expect(list.includes('grape')).toBeTruthy();
    expect(list.includes('camera')).toBeFalsy();
  });

});
