
//Given a String, return a new string with the reversed order of characters

// We'll be impementing it with 4 different solutions, to test out each solution just un-comment it

//solution 1
function reverse (str){
  try{
  const arr = str.spit('');
  arr.reverse();
  return arr.join('');
  } catch(err){
    console.log(err.message);
  }
}

reverse('apple'); 




//solution 2
/*
function reverse (str){
  return str
  .split('').
  reverse()
  .join('');
}
 reverse ('apple');
*/



 //solution 3 using for loops and the ES6 forloop style 
/* 
 function reverse (str){
   let reversed = ('');
   
   for(let character of str ){
     reversed = character + reversed;
   }
   return reversed;
 }
  reverse ('apple');
 */
 
 //solution 4 using array helper and reduce(); 
 /*
 function reverse(str){
   str.split('').reduce((rev, char) => 
     char + rev,
    '' );
 }
reverse('apple');
*/
//unforutnately the new ES6 features is not suppported on Repl.it so the code wont run

 
