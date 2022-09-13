/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var defanged ='';
    defanged = address.replaceAll(".","[.]");    
    return defanged;
};