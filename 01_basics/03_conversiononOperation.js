let score=45

console.log(typeof score);

let sc="45"
console.log(typeof(sc));

//conversion of string to integer
let p=Number(sc)
console.log(p);
console.log(typeof(p));

let s="123abc"
let q=Number(s)
console.log(q);
console.log(typeof(q));   //gives NaN(Not a Number)


let a=null
let r=Number(a)
console.log(r);
console.log(typeof(r));


/*
"33"=>33
"33abc"=>NaN
true=>1

*/

//boolean conversion
let b=1
let is_b=Boolean(b)
console.log(is_b);

//1=>true  0=>false

let c=""
let is_c=Boolean(c)
console.log(is_c);
/* string empty =>false
    string something =>true
*/

//tostring conversion
let d=33
let x=String(d)
console.log(x);
console.log(typeof x);