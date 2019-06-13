// create  global variable so we can convert
var numberArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romanArray = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

// user interface logic gathers input info
$(document).ready(function(){
  $(".numberToRoman").submit(function(event){
    event.preventDefault();
    var numberInput = $("#input").val();
    var romanNumber = toRoman(numberInput)
    // create a var that take result of numberInput look for toRoman in function
    $("#result").text(romanNumber)
  });

  $(".romanToNumber").submit(function(event){
    event.preventDefault();
    var romanInput = parseInt($("#inputTwo").val());
    var numberRoman = fromRoman(romanInput)
    // create a var that take result of numberInput look for toRoman in function
    $("#result2").text(numberRoman)
  });
});


// business logic
function toRoman(number){
  var resultAnswer = '';
  for(var x = 0; x<=numberArray.length; x++){
    while (number%numberArray[x] < number) {
      resultAnswer += romanArray[x];
      number -= numberArray[x];
    }
  }
  return resultAnswer;
}





// function fromRoman(string){
//   var resultAnswer = 0;
//   for(var x = 0; x<=numberArray.length; x++){
//     while (string.indexOf(romanArray[x]) === 0) {
//       resultAnswer += numberArray[x];
//       string = string.replace(romanArray[x],'')
//     }
//   }
//   return resultAnswer;
// }



//
// function numberChecker(input){}
//   return isNaN(input);
//
// var numberCheckerState = numberChecker("cat");
//
// if (numberCheckerState === true) {
//
// }
