


// // var nameId = 4536;

// // nameId = 777;

// // for (var i = 1 ; i<=10 ; i++){
// //     nameId = 9;

// //     console.log (i);
// // }
// // console.log(nameId);


// // function showNameId() {
// //   var nameId = 4536; // declared inside the function
// //   nameId = 777;      // reassigned
// //   console.log(nameId); // prints 777
// // }

// // showNameId(); 

// // console.log(nameId); 


// // if (true) {
// //   let test = 'hello';
// // }
// // console.log(test);


// // console.log(x); // 
// // var x = 5;

// //block-scope relible and save


// // if (true) {
// //   let name = "Abdul";
// //   const age = 25;
// // }

// // console.log(name); 
// // console.log(age); 


// //function scope risky and not save 


// // if (true) {
// //   var name = "Abdul";
// //   var age = 25;
// // }

// // console.log(name); 
// // console.log(age); 



// // if (true) {
// //   var name = "Abdul";
// //   var age = 25;
// // }
// // name = "ali";
// // console.log(name); 
// // console.log(age); 



// // converting 

// // let user = "hello" ;

// // console.log(typeof user);
// //  let changeUser = Number(user)
// //  console.log(changeUser);



// //  let user = 8888 ;

// //   let changeUser = String(user)
// //  console.log(changeUser);
// // console.log(typeof changeUser);


// //  let user = 0 ;

// //   let changeUser = Boolean(user)
// //  console.log(changeUser);
// // console.log(typeof changeUser);
// // false

// //  let user = 1 ;

// //   let changeUser = Boolean(user)
// //  console.log(changeUser);
// // console.log(typeof changeUser);
// //true


// //  let user = "" ;

// //   let changeUser = Boolean(user)
// //  console.log(changeUser);
// // console.log(typeof changeUser);

// // false




// //  let user = "jhgfds" ;

// //   let changeUser = Boolean(user)
// //  console.log(changeUser);
// // console.log(typeof changeUser);
// //true

// ///////////

// // console.log(null > 0);

// // console.log(null === 0);
// // console.log(null < 0);
// // console.log(null >= 0);


// // console.log(undefined > 0);    // false
// // console.log(undefined === 0);  // false
// // console.log(undefined < 0);    // false
// // console.log(undefined >= 0);   // false


// /// stack is a premitive data type they give the copy value to the user not change in oriuginal value


// // let oneUser = "user@gmail.com"
// // let userTwo = oneUser
// // userTwo = "one@gmail.com"
// // console.log(oneUser);
// // console.log(userTwo);



// //heap is a non premitive data type they give reference to the user also they chnage in original value .



// // let user1 = {
// //     email: "1@gamil.com",
// //     name: "abc"
// // }
// // let user2 = user1 
// //  user2.email = "3@gmail.com"


// // console.log(user1.email);
// // console.log(user2.email);



// // strings methods in javascript


// // 1 toUpperCase toLowerCase


// let user = "hello world";
// let user2 = user.toUpperCase();
// console.log(user2);

// let user1 =  "HELLO WORLD";
// let user3 = user1.toLowerCase();
// console.log(user3);

// // 2 charAt
// let user4 = "hello world";
// let user5 = user4.charAt(0);
// console.log(user5);

// // 3 indexOf
// let user6 = "hello world";
// let user7 = user6.indexOf("o");
// console.log(user7);

// // 4 lastIndexOf
// let user8 = "hello world";
// let user9 = user8.lastIndexOf("o");
// console.log(user9);

// // 4 firstIndexOf
// let user10 = "hello world";
// let user11 = user10.indexOf("o");
// console.log(user11);    

// // 5 slice
// let user12 = "hello world";
// let user13 = user12.slice(0, 5);
// console.log(user13);

// // // 6 split
// // let user14 = "hello world";
// // let user15 = user14.split(" ");
// // console.log(user15);

// // // 6 split
// // let user14 = "hello world";
// // let user15 = user14.split("");
// // console.log(user15);

// // // 6 split
// // let user14 = "hello world";
// // let user15 = user14.split(",");
// // console.log(user15);


// // // 6 split
// // let user14 = "hello world";
// // let user15 = user14.split(" ");
// // console.log(user15);


// // // 7 replace
// let user16 = "hello world";
// let user17 = user16.replace("hello", "hi");
// console.log(user17);

// // // // 8 trim
// // let user18 = "   hello world   ";   
// // let user19 = user18.trim();
// // console.log(user19);

// // // 8 trim
// let user18 = "   hello world   ";   
// let user19 = user18;
// console.log(user19);


// // // // 9 concat
// // let user20 = "hello";
// // let user21 = "world";
// // let user22 = user20.concat(" ",user21);
// // console.log(user22);


// // // 9 concat
// let user20 = "hello";
// let user21 = "world";
// let user22 = user20.concat(user21);
// console.log(user22);

// // // // 10 includes
// // let user23 = "hello world";
// // let user24 = user23.includes("kk");
// // console.log(user24);


// // // 10 includes
// let user23 = "hello world";
// let user24 = user23.includes("hel");
// console.log(user24);

// // // // 11 startsWith
// // let user25 = "hello world";
// // let user26 = user25.startsWith("world");
// // console.log(user26);


// // // 11 startsWith
// let user25 = "hello world";
// let user26 = user25.startsWith("hello");
// console.log(user26);

// // // 12 endsWith
// let user27 = "hello world";
// let user28 = user27.endsWith("world");
// console.log(user28);



// // 13 search
// let user29 = "hello world";
// let user30 = user29.search("d")
// console.log(user30);

// // // 14 match
// // let user31 = "hello world";
// // let user32 = user31.match(/l/g)
// // console.log(user32);


// // 14 match
// let user31 = "hello world";
// let user32 = user31.match(/o/g)
// console.log(user32);


// // 14 match
// let user31 = "hello world";
// let user32 = user31.match(/o/g)
// console.log(user32);
// console.log(user32.length);




// // 15 repeat
// let user33 = "hello world";  
// let user34 = user33.repeat(5);
// console.log(user34);


// // 15 repeat
// let user33 = "hello world";  
// let user34 = Array(5).fill(user33).join("\n");
// console.log(user34);




// // 15 repeat
// let user33 = "hello world";  
// let user34 = user33.repeat(5);
// console.log(user34);


