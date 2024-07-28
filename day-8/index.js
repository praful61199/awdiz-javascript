// const numbers = ["rahul", "nehal", "ali", "amod", "adep"];
// const target = "adep";

// const index = numbers.indexOf(target);

// if (index !== -1) {
//   console.log(`Target ${target} found at index ${index}`);
// } else {
//   console.log(`Target ${target} not found`);
// }


// var numbers = ["rahul", "nehal", "ali", "amod", "adep"]
// // var target = "adep";

// function findtarget(numbers,target){
//     for( let i=0 ; i<=numbers.length ; i++){
//         if(numbers[i]===target){
//             return i ;

//         }
//     }
//     return "target not found";

// }
// // var numbers = ["rahul", "nehal", "ali", "amod", "adep"]
// console.log(findtarget(numbers,"adep"));
// console.log(findtarget(numbers,"virat"));





// Q Given an array find count of numbers who are even.

//  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function evencountofnumbers(array){
//     var count = 0;

//     for(i=0; i< array.length ; i++){
//         // console.log(i)
//     if(array[i]% 2 == 0){
//         count++;
    
//     }
// }
// return count
     
// }

// const output =evencountofnumbers(array)
// console.log(output)


// Q Given an array find count of numbers who are even.

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function findCountEvenFromArray(array) {
//   var count = 0;
//   for (var i = 0; i <= array.length - 1; i++) {
//     // console.log(i, array[i]);
//     if (array[i] % 2 == 0) {
//       count++;
//     }
//   }
//   //   console.log(count, "count");
//   return count;
// }

// const output = findCountEvenFromArray(array);
// console.log(output, "output");






// // Q Given an array of names find out index of target . 
// var students = ["rahul", "nehal", "ali", "amod", "adep","rohit","krish"];
// var target = "adep"
// // output  : 4

// function findtarget(target){
//     for(i=0 ; i<students.length  ; i++){

//         if(students[i] == target){
//             return i
//         } 
        
//     }
// }
//  const output = findtarget( "rohit")
//  console.log(output)





// splice examples >>>

var students = ["rahul", "nehal", "ali", "amod", "adep"];

// // students.splice(3,0,"praful")
// students.splice(1,5,"krish")
students.splice(1,2,"virat")

// students.splice(3,1)
console.log(students)


// console.log(students)

// var students = ["rahul", "nehal", "ali", "amod", "adep"];
// students.splice(1, 2, "virat");
// console.log(students)


// slice examples >>
// var students = ["rahul", "nehal", "ali", "amod", "adep"];

// console.log(students.slice(1,3))
// console.log(students.slice(2,3))
// console.log(students.slice(-3,-1))
// console.log(students.slice(2,-1))
// console.log(students.slice(-3))
// console.log(students.slice(3,-1))


// unshift   >>>> adds element from first index
// students.unshift("praful","patil")
// console.log(students)


// shift   >>> removes element from first index

// students.shift("")
// console.log(students)


// pop >>>> removes element form last index
// students.pop()
// console.log(students)


// push >>> adds element to last index
// students.push("hello")
// console.log(students)







