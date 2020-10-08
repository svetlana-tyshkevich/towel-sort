
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix) {
    for  (let i = 0; i <= matrix.length - 1; i++) {
    if (i % 2 === 0) {matrix[i].forEach(item => result.push(item));}
    else matrix[i].reverse().forEach(item => result.push(item));
  }
  }
   
  return result;
}
