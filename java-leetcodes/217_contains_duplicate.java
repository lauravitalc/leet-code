/* 
First Solution:
Date: 03-15-2025
Time Complexity: O(n²)
Memory Complexity: O(1) or O(log n)
Time Limit Exceeded!!!

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);
        for(int i = 0; i < nums.length; i++){
            for(int j = i + 1; j < nums.length; j++){
                if(nums[i] == nums[j]){
                    return true;
                }
            }
        }
        return false;      
    }
}

Second Solution:
Date: 03-15-2025
Time Complexity: O(n²)
Memory Complexity: O(1) or O(log n)
Time Limit Exceeded!!!

class Solution {
     public boolean containsDuplicate(int[] nums) {
        ArrayList<Integer> arr = new ArrayList<>();
        Arrays.sort(nums);
        if(nums.length > 1){
          for(int i = 0; i < nums.length; i++){
              if(arr.contains(nums[i])){
                  return true;
              } else {
                  arr.add(nums[i]);
              }
          }
        }
        return false;      
    }
}
*/

/*
Third Solution:
Date: 03-15-2025
Time Complexity: O(n)
Memory Complexity: O(n)

Runtime: 11ms - Beats 70.98%
Memory: 58.27MB - Beats 41.95%
*/

class Solution {
    public boolean containsDuplicate(int[] nums) {
        if(nums.length <= 1) return false;
        HashSet<Integer> set = new HashSet<>();
        for(int i = 0; i < nums.length; i++){
            if(set.contains(nums[i])){
                return true;
            } else {
                set.add(nums[i]);
            }
        }
        return false;   
    }
}