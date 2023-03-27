'use strict';
const { HashTable } = require('./index');

const tableSize = 1024;
const table = new HashTable(tableSize);

const hashOne = table.hash('Jordan');
const hashTwo = table.hash('Adrienne');
const hashThree = table.hash('Joe');

table.set('Jordan', 'Beer');
table.set('Adrienne', 'Sleeping');
table.set('Joe', 'Whiskey');

describe('HashTable', () => {
  it('Sets a key/value', () => {
    expect(table.has('Joe')).toBeTruthy();
    expect(table.has('Ryan')).toBeFalsy();
  });

  it('Returns the value stored', () => {
    expect(table.get('Joe')).toEqual('Whiskey');

  });

  it('Returns null correctly', () => {
    expect(table.get('Ryan')).toEqual(null);

  });

  it('Successfully returns a list of all keys', () => {
    expect(table.keys()).toEqual(['Joe', 'Adrienne', 'Jordan']);

  });

  it ('Successfully handle a collision within the hashtable', () => {
    table.set('oJe', 'Pineapple');
    expect(table.get('oJe')).toEqual('Pineapple');
  });

  it('Successfully hash a key to an in-range value', () => {

    expect(hashOne).toBeLessThan(tableSize);
    expect(hashTwo).toBeLessThan(tableSize);
    expect(hashThree).toBeLessThan(tableSize);

    expect(hashOne).toBeGreaterThanOrEqual(0);
    expect(hashTwo).toBeGreaterThanOrEqual(0);
    expect(hashThree).toBeGreaterThanOrEqual(0);
  });

});
