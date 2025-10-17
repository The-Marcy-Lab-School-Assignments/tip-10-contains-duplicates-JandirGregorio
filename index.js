/**
 * Write a function named containsDuplicate that takes an array of integers (nums) as input 
 * and returns true if any value appears at least twice in the array, and false if every element is distinct.
 *
 * Problem: Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 *
 * Examples:
 * - containsDuplicate([1,2,3,1]) → true
 * - containsDuplicate([1,2,3,4]) → false  
 * - containsDuplicate([1,1,1,3,3,4,3,2,4,2]) → true
 */

const containsDuplicate = (nums) => {
  //write your code here
  //traverse through the array using a foor loop
  //build a freq table { number: frequencyCounty}
  //do another for loop to see how many times each value has appeared
    //if the number one number has a freq of 2 or more, return true
    // otherwise, return false

    //create freq object to store the frequency of each number
    //if the array is empty return false
    if(nums.length <= 1){
      return false;
    }
    const freq = {};

    // iterate throught the aray and build freq table
    for(let i = 0; i < nums.length; i++){
      // get each key (number) from the array and store it in a variable
      const number = nums[i];
      // check if the number exists in the freq object
      // if it doesn't exist
      if(freq[number] === undefined){
        // initialize the number to 1
        freq[number] = 1;
      } else{
        // otherwise, increment its count
        freq[number]++;
      }
    }
    //now that the freq object is built, traverse once again through nums 
    //create variable to store how many numbers repeat more than once
    let countDuplicates = 0;
    for(let i = 0; i < nums.length; i++){
      //store each value in arrays in `num`
      const num = nums[i];
      if(freq[num] > 1){
        // keep track of the all the numbers that repeat more than once
        countDuplicates++;
      } 
    }
    //if we have at leats one number that repeats more than once, return true, false otherwise
    return countDuplicates >= 1 ? true : false;

};

// Export the function for testing
module.exports = { containsDuplicate };

// Example usage (commented out to avoid interference with tests)
// console.log(containsDuplicate([1,2,3,1])); // → true
// console.log(containsDuplicate([1,2,3,4])); // → false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // → true