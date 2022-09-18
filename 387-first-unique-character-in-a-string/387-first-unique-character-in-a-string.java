class Solution {
    public int firstUniqChar(String s) {
        LinkedHashMap<Character,Integer> hm = new LinkedHashMap<Character,Integer>();
        
        char[] sC = s.toCharArray();
        
        for(int i=0;i<sC.length;i++){
            if(hm.containsKey(sC[i])){
                
                hm.put(sC[i],hm.get(sC[i])+1);
            }else{
                hm.put(sC[i],1);
            }
        }
        for(Map.Entry<Character,Integer> ele :hm.entrySet()){
            if(ele.getValue()==1){
                return s.indexOf(ele.getKey());
            }
        }

        return -1;
    }
}