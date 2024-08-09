function solution(size) {  
  // your code here
  // Initialize an empty array to hold the matrix
  const matrix = [];

  // Loop through each row
  for (let i = 0; i < size; i++) {
    // Create a new row filled with 0's
    const row = new Array(size).fill(0);
    
    // Set the diagonal element to 1
    row[i] = 1;
    
    // Add the row to the matrix
    matrix.push(row);
  }

  return matrix;
}

  return "hello world"

// matrix: The 2D array that will hold the final matrix.
// for loop: Loops from 0 to size-1, creating each row.
// new Array(size).fill(0): Creates an array of the given size filled with 0.
// row[i] = 1: Sets the diagonal element to 1.
// matrix.push(row): Adds the row to the matrix.

// Create a square 2D array of size size x size. Fill the array with 0's.
// Then draw a line of 1's down the main diagonal.
// This is called an identity matrix.

// Example
// Input: size = 4
// Output: solution(4) =
// [
//   [1, 0, 0, 0],
//   [0, 1, 0, 0],
//   [0, 0, 1, 0],
//   [0, 0, 0, 1],
// ]
