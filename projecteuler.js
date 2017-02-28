/*

Problem 1.

Multiples of 3 and 5.

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

function problemOne(number) {
  var sum = 0;
  for (var i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log("Sum of all the natural numbers below " + number + " that are multiples of 3 or 5 is: " + sum);
}

problemOne(10); // Output: Sum of all the natural numbers below 10 that are multiples of 3 or 5 is: 23
problemOne(1000); // Output: Sum of all the natural numbers below 1000 that are multiples of 3 or 5 is: 233168


/*

Problem 2.

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

*/


function problemTwo(value) {                 // THIS IS NOT A PERFECT SOLUTION!!!!
  var sum = 0;
  var x = 0;
  var y = 1;
  
  for (z = 1; z <= value; z++) {            // z++ is not accurate, shouldn't sum z one by one   
    z = x + y;
x = y;
y = z;
if (z % 2 === 0) {
  sum += z; 
}
}
console.log("Sum of the even-valued terms in the Fibonacci sequence that does not exceed four million is: " + sum);
};

problemTwo(4000000); // Output: Sum of the even-valued terms in the Fibonacci sequence that does not exceed four million is: 4613732 (CORRECT ANSWER, WRONG METHOD!)


// second, much more accurate solution:


function problemTwoPointOne(value) {
  var x = 0;
  var y = 1;
  var z = 1;
  var sum = 0;
  
  while (z <= 4000000) {

    z = x + y;
    if (z % 2 === 0) {
      sum += z;
  }
  x = y;
  y = z;
}
console.log("Sum of the even-valued terms in the Fibonacci sequence that does not exceed four million is: " + sum);
};

problemTwoPointOne(4000000); // Output: Sum of the even-valued terms in the Fibonacci sequence that does not exceed four million is: 4613732


/*

Problem 3.

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/


function problemThree(value) {
  var i = 2;
  while (i * i <= value) {
    while (value % i === 0) {
        value = (value / i);
    }
    i += 1;
  }
  console.log("The largest prime factor of this number is: " + value); 
}

problemThree(13195); // Output: The largest prime factor of this number is: 29
problemThree(600851475143); // Output: The largest prime factor of this number is: 6857




