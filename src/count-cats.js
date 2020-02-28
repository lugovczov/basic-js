module.exports = function countCats(matrix) {
  let arrRes = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == '^^') {
        arrRes.push(matrix[i][j]);
      }
    }  

  }

  return arrRes.length;
};
