class Solution {
    public boolean winnerOfGame(String colors) {
        int as=0,bs=0;
          for (int i=1;i<colors.length()-1;i++) {
            if(colors.charAt(i-1)=='A' && colors.charAt(i)=='A' && colors.charAt(i+1)=='A') 
                as++;
            if(colors.charAt(i-1)=='B' && colors.charAt(i)=='B' && colors.charAt(i+1)=='B') 
                bs++;
        }
        return as>bs;
    }
}