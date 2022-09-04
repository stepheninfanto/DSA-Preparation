/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  
    let result =[];
    
    function dfs(ind, current){
        
        //base case 
        if(current.length==k){
            result.push([...current]);
        }
        
        for(let i=ind;i<=n;i++ ){
            current.push(i);
            dfs(i+1, current);
            current.pop();
        }
    }
    
     dfs(1,[]);
        return result;
    
};