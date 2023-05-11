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
// And a written explanation of your solution
