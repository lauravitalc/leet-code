/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
*/

// Só funciona para 2 numeros, ainda! Vou aprimorar em breve.

//  var twoSum = function(nums, target) {
//     for(var x =0; x < nums.length; x++){
//         var num1 = nums[x];
//         for(i = 0; i < nums.length; i++){
//             var num2 = nums[i];
//              resultados = num1 + num2;
//              if(resultados == target){
//                 return [i,x]
//              }
//         }
//     }
// };

// console.log(twoSum([2,7,11,15], 9));

// ----------------------------------------------------------------

// Identificar primeiramente quais são meus inputs e qual deve ser meu output
// Time Complexity: O(N^2)
// Space: O(1) Constante

// const twoSum = (nums, target) => {
//    for(let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//         if(nums[i] + nums[j] === target) {
//             return [i,j];
//         }
//     }
//    }
// };

// console.log(twoSum([2,7,11,15], 9));

// j = i + 1 (o elemento não pode encontrar com ele mesmo), exemplo: 1 x 0, e quando for o 0, 0 x 1


// Time: O(N)
// Space: O(N)
// Utilizando hashmaps
// map = {1:0, 5:1}
// i = 0
// value = 1
// complement_pair = 10 - 1 = 9   ---> Tem algum elemento 9? Não?
// i = 1
// value = 5
// 10 -5 = 5 ---> Tem 5? Opa, não pode o mesmo número!
// Por ai vai.......


const twoSum = (nums, target) => {
   let map = {};
   for(let i = 0; i < nums.length; i++){
    let value = nums[i];
    var complementPair = target - value;
    if(map[complementPair] !== undefined){
        return [map[complementPair], i];
    } else {
        map[value] = i;
    }
   }
 };
 
 console.log(twoSum([3,2,4], 6));
 