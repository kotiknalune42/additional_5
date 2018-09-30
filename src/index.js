module.exports = function check(str, bracketsConfig) {
let len = str.length;
if (len % 2 !== 0) {
    return false;
  }
let temporary = [];
mask = str.split('');
    
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][1] && temporary[temporary.length - 1] == bracketsConfig[j][0]) {
        temporary.pop();
      } else if (mask[i] === bracketsConfig[j][0]) {
        temporary.push(mask[i]);
      }
    }
  }
 return (stack.length == 0);
}
