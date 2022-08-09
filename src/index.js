module.exports = function check(str, bracketsConfig) {
  let stack = [];
    
  for (let i = 0; i < str.length; i++) {
      let brac = str[i];
      for (let index = 0; index < bracketsConfig.length; index++) {
          
          if (brac === bracketsConfig[index][0] && bracketsConfig[index][0] == bracketsConfig[index][1]) {
              
              if (brac == stack.slice(-1)) {
                  stack.pop();
                  continue;
              } else {
                  stack.push(brac);
                  continue;
              }
          }
          
          if (brac === bracketsConfig[index][0]) stack.push(brac); 
          if (brac === bracketsConfig[index][1]) {
              if (stack.pop() != bracketsConfig[index][0]) return false;
          }
      }
  }
  
  return stack.length === 0;
}
