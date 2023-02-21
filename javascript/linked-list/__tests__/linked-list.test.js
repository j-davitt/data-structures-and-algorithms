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

  it('should add a value to the end of the list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.append('cherry');

    const linkedString = list.toString();

    expect(list.head.value).toEqual('banana');
    expect(linkedString).toEqual('{ banana } -> { orange } -> { apple } -> { cherry } -> NULL');

  });

  it('should add multiple values to the end of the list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.append('cherry');
    list.append('grape');

    const linkedString = list.toString();

    expect(list.head.value).toEqual('banana');
    expect(linkedString).toEqual('{ banana } -> { orange } -> { apple } -> { cherry } -> { grape } -> NULL');

  });

  it('should add a value before and after a specific value', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insertBefore('apple', 'cherry');
    list.insertAfter('banana', 'kiwi');

    const linkedString = list.toString();

    expect(list.head.value).toEqual('banana');
    expect(linkedString).toEqual('{ banana } -> { kiwi } -> { orange } -> { cherry } -> { apple } -> NULL');

  });

  it('should add a value before first item in list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insertBefore('banana', 'cherry');

    const linkedString = list.toString();

    // expect(list.head.value).toEqual('cherry');
    expect(linkedString).toEqual('{ cherry } -> { banana } -> { orange } -> { apple } -> NULL');

  });

  it('should add a value after last item in list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insertAfter('apple', 'cherry');

    const linkedString = list.toString();

    // expect(list.head.value).toEqual('cherry');
    expect(linkedString).toEqual('{ banana } -> { orange } -> { apple } -> { cherry } -> NULL');

  });

  it('should return value k from end of list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insert('cherry');
    list.insert('grape');



    expect(list.kthFromEnd(2)).toEqual('banana');
    expect(list.kthFromEnd(3)).toEqual('cherry');
    expect(list.kthFromEnd(7)).toEqual('Exception');
    expect(list.kthFromEnd(4)).toEqual('grape');
    expect(list.kthFromEnd(0)).toEqual('apple');
    expect(list.kthFromEnd(-1)).toEqual('Exception');

  });

});
