// KATA 1 *** Need help to explain

var repeatNumbers = function(data){
  var array = [];
  var num = "";
  var numString = "";

  for (var i = 0; i < data.length; i++){
    for (var j = 0; j < data[i][1]; j++){
      array.push(data[i][0]);
      num = array.join("");
    }
      if (i > 0){
        numString = numString.concat(", ");
      }
    numString = numString.concat(num);
    array = [];
    num = "";
  }
  return numString;
};

console.log(repeatNumbers([[1, 10]]))
console.log(repeatNumbers([[1, 2], [2, 3]]))
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]))