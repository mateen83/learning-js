


// var nameId = 4536;

// nameId = 777;

// for (var i = 1 ; i<=10 ; i++){
//     nameId = 9;

//     console.log (i);
// }
// console.log(nameId);


// function showNameId() {
//   var nameId = 4536; // declared inside the function
//   nameId = 777;      // reassigned
//   console.log(nameId); // prints 777
// }

// showNameId(); 

// console.log(nameId); // ❌ This would throw an error because nameId is not defined outside the function


// if (true) {
//   let test = 'hello';
// }
// console.log(test);


// console.log(x); // ❓ Output: undefined
// var x = 5;

//block-scope relible and save


// if (true) {
//   let name = "Abdul";
//   const age = 25;
// }

// console.log(name); 
// console.log(age); 


//function scope risky and not save 


if (true) {
  var name = "Abdul";
  var age = 25;
}

console.log(name); 
console.log(age); 



if (true) {
  var name = "Abdul";
  var age = 25;
}
name = "ali";
console.log(name); 
console.log(age); 
