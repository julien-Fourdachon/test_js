function sum(a, b) {
    return a + b;
  }

function  substr(a, b) {
  return a - b;
}

function  mult(a, b) {
  return a * b;
}

function  split(a, b) {
  return a / b;
}

function centuryTime(a,b) {
  return substr(a.getTime(),b.getTime())/1000;
}
module.exports = {sum, substr, mult, split, centuryTime};