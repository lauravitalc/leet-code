/*
First Solution:
Date: 04-26-2025
Time Complexity: O(n)
Memory Complexity: O(1)
Solution: Two Pointers

Runtime: 2 ms - Beats 84.15%
Memory: 46.1 MB - Beats 32.19%
*/

class Solution {
  public void moveZeroes(int[] nums) {
    int position = 0;
    for(int i=0; i < nums.length; i++){
      if(nums[i] != 0){
        int temp = nums[position];
        nums[position] = nums[i];
        nums[i] = temp;
        position++;
      }
    }
  }
}