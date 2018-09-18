// *** KATA 2 ***
// Do not use Array.prototype.filter()

var conditionalSum = function (values, condition) {
  var target = 0;
    for (var i = 0; i < values.length; i++) {
      if (condition === "even" && values[i] % 2 === 0) {
        target += values[i];
      } else if (condition === "odd" && values[i] % 2 !== 0) {
        target += values[i];
      }
    } return target;
  };



console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
