/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var res ='';
    for(let i=0; i< address.length;i++){
        if(address[i]=='.'){
            res =res +"[";
            res = res+address[i];
            res = res+']';
        }else{
             res=res+address[i];
        }       
    }
    
    return res;
};