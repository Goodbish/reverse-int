module.exports = function reverse (num) {
    if (num < 0) { num = Math.abs(num) }
    num = +num.toString().split('').reverse().join(''); 
  return num
}
