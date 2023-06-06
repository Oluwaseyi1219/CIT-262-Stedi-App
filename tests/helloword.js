import hello from "../utils/helloPeter.js";

it ("Should say Peter", ()=>{
    const helloString=hello();
    console. log(helloString);

    expect(helloString).toBe("Peter")
})
