/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
      str = s.trim().split(" ");
  return   str = str.filter((ele)=> ele!="").reverse().join(" ");
    
    
        // .reverse().join(" ").replaceAll(","," ");    
};