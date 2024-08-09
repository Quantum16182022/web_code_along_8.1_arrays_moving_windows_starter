function solution(a, window_size) {
  // your code here
  function solution(a, window_size) {
    // Initialize an empty array to store the averages
    const averages = [];
    
    // Loop through the array up to the point where the window can fit
    for (let i = 0; i <= a.length - window_size; i++) {
      // Extract the current window of elements
      const window = a.slice(i, i + window_size);
      
      // Calculate the sum of the elements in the window
      const sum = window.reduce((acc, val) => acc + val, 0);
      
      // Calculate the average and push it to the averages array
      const average = sum / window_size;
      averages.push(average);
    }
    
    return averages;
  }
  
  // Example usage:
  const a = [20, 64, 73, 58, 74];
  const window_size = 4;
  
  console.log(solution(a, window_size)); // Output: [53.75, 67.25]
  
  return "hello world"
}

// Write a function that moves a "window" over an array, averaging the values under the window as it goes.

// For example, a window of size 3 moving across an array of length 9 might look like this for the first 3 moves (window is the bar over the values):

//  _____
//  6 2 8 3 7 9 1 0 5    Window over 6,2,8

//    _____
//  6 2 8 3 7 9 1 0 5    Window over 2,8,3

//      _____
//  6 2 8 3 7 9 1 0 5    Window over 8,3,7
// Your goal is to return an array of averages of the values under the window as it moves.

// Example
// Input:
// a == [20, 64, 73, 58, 74]
// window_size == 4

// Output:
// [53.75, 67.25]
// For a = [20, 64, 73, 58, 74] and window_size = 4:

// First window (i = 0): [20, 64, 73, 58]
// Sum: 20 + 64 + 73 + 58 = 215
// Average: 215 / 4 = 53.75

// Second window (i = 1): [64, 73, 58, 74]
// Sum: 64 + 73 + 58 + 74 = 269
// Average: 269 / 4 = 67.25

// The final output is [53.75, 67.25].







