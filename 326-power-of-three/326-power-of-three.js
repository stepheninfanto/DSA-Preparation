/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    
    if(n==0) return false;    
    return ((n==1) || (n%3 == 0) && isPowerOfThree(n/3))
        
};