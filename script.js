


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

// console.log(nameId); 


// if (true) {
//   let test = 'hello';
// }
// console.log(test);


// console.log(x); // 
// var x = 5;

//block-scope relible and save


// if (true) {
//   let name = "Abdul";
//   const age = 25;
// }

// console.log(name); 
// console.log(age); 


//function scope risky and not save 


// if (true) {
//   var name = "Abdul";
//   var age = 25;
// }

// console.log(name); 
// console.log(age); 



// if (true) {
//   var name = "Abdul";
//   var age = 25;
// }
// name = "ali";
// console.log(name); 
// console.log(age); 



// converting 

// let user = "hello" ;

// console.log(typeof user);
//  let changeUser = Number(user)
//  console.log(changeUser);



//  let user = 8888 ;

//   let changeUser = String(user)
//  console.log(changeUser);
// console.log(typeof changeUser);


//  let user = 0 ;

//   let changeUser = Boolean(user)
//  console.log(changeUser);
// console.log(typeof changeUser);
// false

//  let user = 1 ;

//   let changeUser = Boolean(user)
//  console.log(changeUser);
// console.log(typeof changeUser);
//true


//  let user = "" ;

//   let changeUser = Boolean(user)
//  console.log(changeUser);
// console.log(typeof changeUser);

// false




//  let user = "jhgfds" ;

//   let changeUser = Boolean(user)
//  console.log(changeUser);
// console.log(typeof changeUser);
//true

///////////

// console.log(null > 0);

// console.log(null === 0);
// console.log(null < 0);
// console.log(null >= 0);


// console.log(undefined > 0);    // false
// console.log(undefined === 0);  // false
// console.log(undefined < 0);    // false
// console.log(undefined >= 0);   // false


/// stack is a premitive data type they give the copy value to the user not change in oriuginal value


// let oneUser = "user@gmail.com"
// let userTwo = oneUser
// userTwo = "one@gmail.com"
// console.log(oneUser);
// console.log(userTwo);



//heap is a non premitive data type they give reference to the user also they chnage in original value .



let user1 = {
    email: "1@gamil.com",
    name: "abc"
}
let user2 = user1 
 user2.email = "3@gmail.com"


console.log(user1.email);
console.log(user2.email);




