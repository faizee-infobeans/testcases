import { render, screen, cleanup } from "@testing-library/react";
import Todo from "./list";
import sum from './sum'
import ObjectTesting from './object'
import StringTesting from './string'
import shoppingList from './array'
import callback from './callback'

afterEach(()=>{
   cleanup()
})

//promise testing
test('the data is faizee', () => {
   return callback().then((data)=>{
      expect(data).toBe('faize');
   }).catch((err)=>{
      console.log('error in test case');
   })
 });

//array testing 
 test('the shopping list has milk on it', () => {
   expect(shoppingList()).toContain('milk');
   //expect(new Set(shoppingList)).toContain('milk');
 });

test('adding positive numbers is not zero', () => {
   for (let a = 1; a < 10; a++) {
     for (let b = 1; b < 10; b++) {
       expect(a + b).not.toBe(0);
     }
   }
 });

 test('null', () => {
   const n = null;
   expect(n).toBeNull();
   expect(n).toBeDefined();
   expect(n).not.toBeUndefined();
   expect(n).not.toBeTruthy();
   expect(n).toBeFalsy();
 });
 
 test('zero', () => {
   const z = 0;
   expect(z).not.toBeNull(); //  toBeNull matches only null
   expect(z).toBeDefined(); // toBeUndefined matches only undefined
   expect(z).not.toBeUndefined(); // toBeDefined is the opposite of toBeUndefined
   expect(z).not.toBeTruthy(); // toBeTruthy matches anything that an if statement treats as true
   expect(z).toBeFalsy(); //// toBeFalsy matches anything that an if statement treats as false
 });

 test('two plus two', () => {
   const value = 2 + 2;
   expect(value).toBeGreaterThan(3);
   expect(value).toBeGreaterThanOrEqual(3.5);
   expect(value).toBeLessThan(5);
   expect(value).toBeLessThanOrEqual(4.5);
 
   // toBe and toEqual are equivalent for numbers
   expect(value).toBe(4);
   expect(value).toEqual(4);
 });

 test('adding floating point numbers', () => {
   const value = 0.1 + 0.2;
   //expect(value).toBe(0.3);           This won't work because of rounding error
   expect(value).toBeCloseTo(0.3); // This works.
 });

test('there is no I in team', () => {
   expect(StringTesting()).not.toBe("hii");
 });
 
 test('but there is a "stop" in Christoph', () => {
   expect(StringTesting()).toBe("hello");
 });

test('object testing', () => {
   const data = {one: 1};
   data['two'] = 2;
   expect(ObjectTesting()).toEqual({name: "faizee", age: 21});
 });

 test('object assignment', () => {
   const data = {one: 1};
   data['two'] = 2;
   expect(data).toEqual({one: 1, two: 2});
 });

test("should renter non-completed list", () => {
    const todo = {id:1,title:'wash dishes',completed:false}
    render(<Todo todo={todo}></Todo>);
    const todoElement = screen.getByTestId(`todo-1`);
    expect(todoElement).toBeInTheDocument();
       expect(todoElement).toHaveTextContent('wash dishes')
    expect(todoElement).not.toContainHTML('<strike>')
  });

  test("should renter completed list", () => {
    const todo = {id:2,title:'wash car',completed:true}
    render(<Todo todo={todo}></Todo>);
    const todoElement = screen.getByTestId(`todo-2`);
    expect(todoElement).toBeInTheDocument();
       expect(todoElement).toHaveTextContent('wash car')
    expect(todoElement).not.toContainHTML('<strike>')
  });

  test('adds 1 + 2 to equal 3', () => {
   expect(sum(1, 2)).toBe(3);
 });

 