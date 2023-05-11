function selectionSortRecursive(arr) {
  // type your code here
  if(arr.length === 1) {
    return [arr[0]]
  }
  const min = Math.min(...arr)
  arr.splice(arr.findIndex(num => num === min), 1)
  return [min, ...selectionSortRecursive(arr)]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
//return once the length of the array is 1
//find the lowest value in the array and put it as the left most value in a new array
//everything to the right of that value should be the remaining values of the array
//return the new array
// And a written explanation of your solution
