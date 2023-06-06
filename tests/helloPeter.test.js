import sayHello from '../utils/helloPeter.js';
import assert from 'assert';

it("Hello World", ()=> {

const hello = sayHello();

 assert.equal(hello, "hello");


});
