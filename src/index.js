module.exports = function solveSudoku(matrix) {
  const N = matrix.length;
  var cell = [];


  if ( isEmptyCell(matrix, row, col) == false ) {
    //console.log(matrix);
    return matrix
  };

  var row = cell[0];
  var col = cell[1];

  for (var num = 1; num < 10; num++) {
    if ( isSafe(matrix, row, col, num) ) {
      matrix[row][col] = num;
      if ( solveSudoku(matrix) ) {
        return matrix
      } else {
          matrix[row][col] = 0;
      }
    }
  }


  function isEmptyCell(matrix, row, col) {
    for (var row = 0; row < N; row++) {
      for (var col = 0; col < N; col++) {
        if (matrix[row][col] === 0) {
          cell[0] = row;
          cell[1] = col;
          return true
        }
      }
    }
    return false
  }

  function isSafe(matrix, row, col, num) {
    return isSafeRow(matrix, col, num) && isSafeCol(matrix, row, num) && isSafe3x3(matrix, row - row%3, col - col%3, num)
  }

  function isSafeRow(matrix, col, num) {
    for (var col = 0; col < N; col++) {
      if (matrix[row][col] === num) {
        return false
      }
    }
    return true
  }

  function isSafeCol(matrix, row, num) {
    for (var row = 0; row < N; row++) {
      if (matrix[row][col] === num) {
        return false
      }
    }
    return true
  }

  function isSafe3x3(matrix, row, col, num) {
    for (var i = 0; i < N / 3; i++) {
      for (var j = 0; j < N / 3; j++) {
        if (matrix[i + row][j + col] === num) {
          return false
        }
      }
    }
    return true
  }

  return false
}


const initial = [
  [6, 5, 0, 7, 3, 0, 0, 8, 0],
  [0, 0, 0, 4, 8, 0, 5, 3, 0],
  [8, 4, 0, 9, 2, 5, 0, 0, 0],
  [0, 9, 0, 8, 0, 0, 0, 0, 0],
  [5, 3, 0, 2, 0, 9, 6, 0, 0],
  [0, 0, 6, 0, 0, 0, 8, 0, 0],
  [0, 0, 9, 0, 0, 0, 0, 0, 6],
  [0, 0, 7, 0, 0, 0, 0, 5, 0],
  [1, 6, 5, 3, 9, 0, 4, 7, 0]
];
