function repeat(operation, num) {
      // SOLUTION GOES HERE
      if(num == 0) {
      	return operation;
      }
      else {
      	return repeat(operation, num - 1);
      }
}
    
// Do not remove the line below
module.exports = repeat