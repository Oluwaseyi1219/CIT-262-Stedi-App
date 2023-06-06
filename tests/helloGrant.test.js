import { helloGrant } from "../utils/helloGrant";

it ("Should say Hello Grant", ()=>{
    helloGrant();
})

console.assert(helloGrant() == "Hello Grant", "It didn't say Hi! (Grant)");