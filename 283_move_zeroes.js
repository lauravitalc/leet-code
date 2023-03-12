/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 
*/

/* Lógica: Two Pointer 
T: O(n)
S: Não estamos criando mais espaço, O(1)
Last Non Zero Index = 0
0, 1, 0, 3, 12
0 equivale !lastNonZero? false
1 equivale !lastNonZero? true, lastNonZero = 1
.....
final: 1,3,12,3,12
              x --

Thanks to: https://www.youtube.com/watch?v=qdhLs6usobE 
for helping me!
*/
const moveZeroes = (nums) => {
    let lastNonZeroI = 0;
    for(let i=0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[lastNonZeroI] = nums[i];
            lastNonZeroI++;
        }
    }

    for(let i=lastNonZeroI; i<nums.length; i++){
        nums[i] = 0;
    }
};

moveZeroes([0,1,0,3,12]);

/* 
Solution by raunak1508

let moveZeroes = function(nums) {
    for(let i= nums.length-1; i>=0; i--){
        if(nums[i]===0){
            nums.push(0) 
            nums.splice(i,1)
        }
    }
    return nums
};


Solution by shendade

var moveZeroes = function(nums) {
  let insertPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) nums[insertPos++] = nums[i];
  }
  for (let j = insertPos; j < nums.length; j++) {
    nums[j] = 0;
  }
};

74/74 cases passed (143 ms)
Your runtime beats 62.77 % of javascript submissions
Your memory usage beats 75.55 % of javascript submissions (46.4 MB)

var moveZeroes = function (nums) {
  let i = 0;
  while (nums[i] !== 0 && i < nums.length) i++;
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
};

74/74 cases passed (95 ms)
Your runtime beats 94.12 % of javascript submissions
Your memory usage beats 36.11 % of javascript submissions (46.9 MB)

Solutionby realnafees

var moveZeroes = function (nums) {

    let j = 0
    let i = 1
    while (i < nums.length) {
        if (nums[j] === 0 && nums[i] !== 0) {
            nums[j] = nums[i]
            nums[i] = 0
            j++
        }
        if (nums[j] !== 0) {
            j++
        }
        i++
    }
};


https://leetcode.com/problems/move-zeroes/solutions/2685367/js-es6-two-pointers-93-with-explanation/
*/