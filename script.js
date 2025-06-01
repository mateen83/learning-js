


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
// let user34 = user33.repeat(5;);
// console.log(user34);


// Number methods in javascript

// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324
// console.log(Number.POSITIVE_INFINITY); // Infinity
// console.log(Number.NEGATIVE_INFINITY); // -Infinity
// console.log(Number.NaN); // NaN 


// const score = 100;
// console.log(score.toString()); // "100"
// console.log(score.toFixed(2)); // "100.00"
// console.log(typeof score); // "number"


// const score2 = 100.97564;
// console.log(score2.toPrecision(1)); 
// console.log(score2.toPrecision(3)); 


// const score3 = 10097564000;
// console.log(score3.toLocaleString("en-US"));


//Math methods in javascript


// console.log(Math.random()*10); // 0.123456789
// console.log(Math.floor(Math.random()*10)+ 1); // 0
// console.log(Math.ceil(Math.random()*10)); // 0


// const min = 10;
// const max = 20;
// const randomNumber = Math.floor(Math.random() * (max - min + 1));
// // const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNumber); // Random number between 1 and 100




//date methods in javascript

// const date = new Date();
// console.log(date); // Current date and time  


// const date2 = new Date ();
// console.log(date2.toLocaleDateString()); // Current date and time  

// const date3 = new Date ();
// console.log(date3.toLocaleDateString()); 


// const date4 = new Date (2023, 10, 5, 12, 30, 0); // Year, Month (0-11), Day, Hours, Minutes, Seconds
// // console.log(date4.toLocaleDateString()); 
// // console.log(date4);
// console.log(date4.toLocaleString()); 
// // console.log(date4.toLocaleDateString()); 

//array in javascript


// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.shift(); // removes the first element from arr1 and returns it
// console.log(arr2); 
// console.log(arr1); // arr1 is now [2, 3, 4, 5]


// const arr3 = [1, 2, 3, 4, 5, 23, 45, 67, 89];
// const arr4 = arr3.unshift(44); // adds elements to the beginning of arr3
// console.log(arr3); // arr3 is now [1, 2, 3, 4, 5, 23, 45, 67, 89]


// const arr5 = [1, 2, 3, 4, 5];
// const arr6 = arr5.pop(34);
// console.log(arr6); // removes the last element from arr5 and returns it
// console.log(arr5); // arr5 is now [1, 2, 3, 4]

// const arr7 = [1, 2, 3, 4, 5];
// const arr8 = arr7.push(6); // adds elements to the end of arr7
// console.log(arr8); // arr7 is now [1, 2, 3, 4, 5, 6]
// console.log(arr7); // arr7 is now [1, 2, 3, 4, 5, 6]

// const arr11 = [1, 2, 3, 4, 5];
// const arr12 = arr11.slice(1, 3); // returns a shallow copy of a portion of arr11 from index 1 to index 3 (not inclusive)
// console.log(arr12); // returns [2, 3]
// console.log(arr11); // returns [1, 2, 3, 4, 5]

// const arr9 = [1, 2, 3, 4, 5];
// // const arr10 = arr9.splice(1, 3); // removes 5 elements from index 1 of arr9
// console.log(arr9.splice(1,4)); // returns the removed elements [2, 3, 4, 5]
// // console.log(arr9); 

// const arr13 = [1, 2, 3, 4, 5];
// console.log(arr13.slice(1, 4)); //removes 3 elements from index 1 of arr13 and adds 6 and 7

// flat method in javascript 

// const arr14 = [1, 2, [3, 4, [5, 6]]];
// const arr15 = arr14.flat(2); // flattens the array to a depth of 2
// console.log(arr15); // returns [1, 2, 3, 4, 5, 6]

// //concat method in javascript

// const arr16 = [1, 2, 3];
// const arr17 = [4, 5, 6];
// const arr18 = arr16.concat(arr17); // concatenates arr16 and arr17
// console.log(arr18); // returns [1, 2, 3, 4, 5, 6]

// //spred operator in javascript

// const arr19 = [1, 2, 3];
// const arr20 = [4, 5, 6];
// const arr21 = [...arr19, ...arr20]; // spreads the elements of arr19 and arr20 into a new array
// console.log(arr21); // returns [1, 2, 3, 4, 5, 6]

// //map method in javascript  
// const arr22 = [1, 2, 3, 4, 5];
// const arr23 = arr22.map((num) => num * 2); // creates a new array with each element multiplied by 2
// console.log(arr23); // returns [2, 4, 6, 8, 10]

// //filter method in javascript
// const arr24 = [1, 2, 3, 4, 5];
// const arr25 = arr24.filter((num) => num > 2); // creates a new array with elements greater than 2
// console.log(arr25); // returns [3, 4, 5]

// //reduce method in javascript
// const arr26 = [1, 2, 3, 4, 5];
// const sum = arr26.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sums all elements in arr26
// console.log(sum); // returns 15

// //find method in javascript
// const arr27 = [1, 2, 3, 7, 5];      
// const found = arr27.find((num) => num > 3); // finds the first element greater than 3
// console.log(found); // returns 4

// const arr28 = [kkhj, jdhs, sjhdh, jdhj, jdhj];
// const found2 = arr28.find((num) => num === "jdhj"); // finds the first element that is equal to "jdhj"
// console.log(found2); // returns "jdhj"


console.log(Array.isArray("world")); // checks if arr28 is an array
console.log(Array.of("hello")); // checks if "hello" is an array
console.log(Array.from("hello")); // converts "hello" to an array of characters


