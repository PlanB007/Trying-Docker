console.log('all good');

function functionName(para, pipa) {
  console.log('hi');
}

(function functionName(para, pipa) {
  console.log('hi cool');
}())


// Some functional programming over here!!!
function doeSteedsOpnieuw (hoopSpullen, fucntieOfz) {
  var nieuweHoop = [];
  for (var i = 0; i < hoopSpullen.length; i++) {
    nieuweHoop.push(
      fucntieOfz(hoopSpullen[i])
    )
  };

  return nieuweHoop;
}

var arr1 = [1,2,3];

var noudo = doeSteedsOpnieuw(arr1, function(item) {
  return item * 2;
});

console.log(noudo);

// prototypes
var a = {};
var b = function() { };
var c = [];
