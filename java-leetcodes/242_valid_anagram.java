/*
First Solution (Mine):
Date: 04-26-2025
Time Complexity: O(n log n)
Memory Complexity: O(n)
Solution: Arrays.equals and Arrays.sort

Runtime: 4 ms - Beats 76.17%%
Memory: 44.86 MB - Beats 26.65%
*/

class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        
        char[] arrayS = s.toCharArray();
        char[] arrayT = t.toCharArray();
        Arrays.sort(arrayS);
        Arrays.sort(arrayT);
        return Arrays.equals(arrayS, arrayT);  
    }
}

/*
Second Solution (Thanks ChatGPT):
Time Complexity: O(n)
Memory Complexity: O(1)

class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] count = new int[26];  // 26 letras do alfabeto
        
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }

        for (int c : count) {
            if (c != 0) return false;
        }
        return true;
    }
}

*/