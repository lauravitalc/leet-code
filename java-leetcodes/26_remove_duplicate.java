/*
First Solution:
Date: 03-15-2025
Time Complexity: O(n)
Memory Complexity: O(1)

Runtime: 0 ms - Beats 100.00%
Memory: 44.92 MB - Beats 39.99%
*/

class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums.length == 0) return 0;
        int count = 0;
        for(int i = 1; i < nums.length; i++){	
            if(nums[i] != nums[count]){
                count++;
                nums[count] = nums[i];
            }
        }
        return count + 1; 
    }
}