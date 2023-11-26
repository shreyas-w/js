
//type 1
const a=100

//type 2
let b=12345

//type 3
//variable decleration type 1
var c="shreyas"
//type 2   //prefer not to use
d="wandkar";
 
//type 4
let e;        //if we just declare and do assign value the default value is undefined
console.log(e);



console.log(a);

console.log(b);
console.log(c);


//trying to change the values

//a=125   //not possible
b=265   //let can be changed
c="mahesh"  //var can be changed
console.table([a,b,c,d,e]);


//should not use var because it has issues with block scope and function scope 