//The algorithm to convert from Celsius to Fahrenheit is the temperature
in Celsius times 9/5, plus 32.

//You are given a variable celsius representing a temperature in Celsius.
Use the variable fahrenheit already defined and apply the algorithm to assign
it the corresponding temperature in Fahrenheit.

function convertToF(celsius) {

  var fahrenheit;
  // Only change code below this line

  fahrenheit = celsius * (9/5) + 32;

  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);
