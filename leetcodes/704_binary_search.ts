/* 03/28/2024 My first Solution
Runtime: 57ms (Beats 76.90% of users with TypeScript)
Memory: 54.22mb (Beats 8.27% of users with TypeScript)*/
function search(nums: number[], target: number): number {
    let lowest:number = 0;
    let highest:number = nums.length - 1;

    while (lowest <= highest) {
        let middle:number = Math.round((highest + lowest) / 2);
        let guess = nums[middle];

        if(guess == target){
            return middle;
        }
        if(guess > target){
            highest = middle - 1;
        } else {
            lowest = middle + 1;
        }
    }
    return -1;
};

var nums:number[] = [-1,0,3,5,9,12];
var target = 9;
console.log(search(nums, target));