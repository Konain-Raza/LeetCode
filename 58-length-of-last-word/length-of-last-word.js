/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let count = 0;
    for(let i = s.length - 1; i >= 0; i--) {
    if(s[i] === " " && count > 0) {
   return count;
        }
        else if(s[i] !== " ") {
    count++;
   }
    }
    return count;
};

    