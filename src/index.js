module.exports = function check(str, bracketsConfig) {
let temporaryArray = [], checker,
    bracketString = String(bracketsConfig).split(','),
    len = str.length, temporaryLen = temporaryArray.length;

  for (let i = 0; i < len; i++) {
   for (let j = 0; j < bracketString.length; j += 2) {
      if (str[i] == bracketString[j + 1] && checker == bracketString[j]) {
        temporaryArray.pop();
        checker = temporaryArray[temporaryLen - 1];
     
      } else if (str[i] == bracketString[j]) {
        temporaryArray.push(bracketString[j]);
        checker = temporaryArray[temporaryLen - 1];
        break;
      }

    }
  }
  
if (str.length % 2) {
    return false;
  } else {
    return temporaryLen == 0;
}
}
