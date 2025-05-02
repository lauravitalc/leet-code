/*
First Solution (Mine):
Date: 05-02-2025
Time Complexity: O(n*m)
Memory Complexity: O(m)
Solution: .contains(), .substring(), .equals()

Runtime: 0 ms - Beats 100%%
Memory: 41.31 MB - Beats 89.18%
*/

class Solution {
    public int strStr(String haystack, String needle) {
        int size = needle.length();
        if (!haystack.contains(needle) || needle.length() > haystack.length()) return -1;
        for(int i=0; i <= haystack.length() - needle.length(); i++){
            if(haystack.substring(i, i + size).equals(needle)){
                return i;
            }
        }
        return -1;
    }
}