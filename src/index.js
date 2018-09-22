module.exports = function check(str, bracketsConfig) {
  var tempArray = [],
    lastArray,
    bracketStr = String(bracketsConfig).split(',');

  for (var i = 0; i < str.length; i++) {
   
    for (var j = 0; j < bracketStr.length; j += 2) {

      if (str[i] == bracketStr[j + 1] && lastArray == bracketStr[j]) {
        tempArray.pop();
        lastArray = tempArray[tempArray.length - 1];
      
      } else if (str[i] == bracketStr[j]) {
        tempArray.push(bracketStr[j]);
        lastArray = tempArray[tempArray.length - 1];
        break;
      }

    }
  }
  if (str.length % 2) {
    return false;
  } else if (tempArray.length == 0) {
    return true; 
  } else return false;
}
