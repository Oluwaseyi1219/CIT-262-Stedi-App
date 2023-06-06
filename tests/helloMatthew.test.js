import assert from 'assert';
import { helloMatthew } from '../utils/helloMatthew.js';

it ('should say hello Matthew', ()=> {
  helloMatthew();
})

function testHelloMatthew() {
  const result = helloMatthew();
  assert.strictEqual(result, 'Hello Matthew');
  console.log('Test passed!');
}

testHelloMatthew();