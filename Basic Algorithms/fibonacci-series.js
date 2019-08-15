//Fibonacci series is a series of numbers in which each number is a sum of its two preceeding numbers

function fib(n){
if (n <2){
return n;
}
return fib(n-1) + fib(n-2);
}
console.log(fib(6)); //test it out with any number as long as you understand how Fibonacci series works
