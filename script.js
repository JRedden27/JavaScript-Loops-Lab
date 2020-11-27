// I commented these all out so that they would't be called
// on at the same time, as the instructions asked for the 
// same variables in some questions and several required prompts.


// 1) One to Ten

// for(let i = 1; i < 11; i++) {
//     console.log(i + "\n");
// }

// 2) Squares

// for(let square = 1; square < 11; square++) {
//     console.log(Math.pow(square, 2) + "\n");
// }

// 3) Even Under N

// let n = Number(prompt("Enter a number:"));
// for(let evenN = 2; evenN < n; evenN += 2) {
//     console.log(evenN + "\n");
// }

// 4) Sum

// let n = Number(prompt("What is the lower number?"));
// let m = Number(prompt("What is the higher number?"));
// let total = 0;
// for(let count = n; count < m; count++) {
//     total += count;
// }
// console.log(total);

// 5) Are We There Yet

// let answer = prompt("Are we there yet?");
// while(answer !== "Yes") {
//     answer = prompt("Are we there yet?");
// }
// console.log("Good!");

// 6) Triangle

// I know the outer loop is redundant. But, I could't figure
// out another way to display five lines with a nested loop,
// since five is a prime number. So, I only ran the outer
// loop once.

// for(let i = 1; i <= 1; i++) {
//     let level = "";
//     let triangle = "";
//     for(j = 1; j <= 5; j++) {
//         level += "*";
//         triangle += level + "\n";
//     }
//     console.log(triangle);
// }

// 7) Table Square

// let table = "";
// for(let y = 1; y <= 4; y++){
//     for(let x = 1; x <= 4; x++){
//             table += `| ${x * y} |`
//     }
//     table += "\n";
// }
// console.log(table);

// 8) Table Square 2

// let n = Number(prompt("How many rows/ columns?"));
// let table = "";
// for(let y = 1; y <= n; y++){
//     for(let x = 1; x <= n; x++){
//             table += `| ${x * y} |`
//     }
//     table += "\n";
// }
// console.log(table);