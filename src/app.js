import Example1 from "./example/example1.js";
import Example2 from "./example/example2.js";

(async function(){

    // desable params

    const example1 = await Example1({ 
        name:"José", 
        city:"São Paulo", 
        number:34, 
        married:true 
    });
    
    const example2 = await Example2(true /* or false */);

    console.log("Example 1 --->", example1);
    console.log("Example 2 --->", example2);

})()