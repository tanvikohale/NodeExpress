let data1 = true;
let data2 = false;

function dosomething() {
    console.log("Creating a function")
};

// Here we see about named export

export {data1 , data2}
export {dosomething}
// OR
export function dosomething2() {
    console.log("Creating a function 2")
};