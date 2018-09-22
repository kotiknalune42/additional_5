module.exports = function check(str, bracketsConfig) {
  var allBrackets = "()[]{}",
      bracketsConfig = [];
      str = str.split('')
      
  for (var i = 0, thing; thing = str[i]; i++) {

    var searchString = allBrackets.indexOf(thing); //finds iteration(s) in bracketsConfig
    if (searchString === -1) { // if not found
      continue; // goes to next iteration
    }

    if (searchString % 2 === 0) { 
        bracketsConfig.push(searchString + 1); 
        // adds # of arrays depending on index of allBrackets
    } else {
      if (bracketsConfig.pop() !== searchString) {
        return false;
      } else {
       return bracketsConfig.length == 0;
      } 
    }
  }
}
