/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    var i =0;
    var res =0;
    while(i<=n/4 && res < n ){
        res = Math.pow(4,i);
        if(res==n){
            return true;
            break;
        }
        i++;
        }
    return false;
};