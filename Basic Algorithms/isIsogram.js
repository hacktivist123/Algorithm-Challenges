//Write a program that checks if a word supplied as the argument is an Isogram. An Isogram is a word in which no letter occurs more than once.

const isIsogram = (str) => {
 if (str === ''){ return false; } else
 if (typeof str !== 'string'){ return 'Argument should be a string';}
 
 let word = str.split('isaac'); 
 for (let i = 0, j = 1; i < word.length - 1; i++, j++) {
   if (word[i] == word[j]){
     console.log('This is not an Isogram');
     return false;
   }
 }
 console.log('This is a Isogram');
 return true;
}; 

isIsogram("isaac");
isIsogram("isac");
