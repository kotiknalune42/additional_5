module.exports = function check(str, bracketsConfig) {
  var brackets = "[]{}()",

    bracketsConfig = [],
    i, object, bracketsLocation;

  for (i = 0; object = str[i]; i++) {

    bracketsLocation = brackets.indexOf(object);
    if (bracketsLocation === -1) {
      continue;
    }

    if (bracketsLocation % 2 === 0) {
      bracketsConfig.push(bracketsLocation + 1);
    } else {
      if (bracketsConfig.pop() !== bracketsLocation) {
        return false;
      }
    }
  }
  return bracketsConfig.length === 0;
}
