import { sayBrian } from "../utils/helloBrian.js";
it ("Should say Hello Brian!", ()=> {
    sayBrian();
})
console.assert(sayBrian() == "Hello Brian!", "sayBrian should give Hello Brian!");