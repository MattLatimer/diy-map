var words = ["ground", "control", "to", "major", "tom"];

function map(arr, cb) {
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i], i, arr));
  }

  return newArr;
}

var length = map(words, function(word) {
  return word.length;
});

var uppers = map(words, function(word) {
  return word.toUpperCase();
});

var reversed = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(length);
console.log(uppers);
console.log(reversed);

// Expected Results
//
// [6, 7, 2, 5, 3]
// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

