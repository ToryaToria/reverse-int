module.exports = function reverse(n) {
  const reversedNum = Number([...Math.abs(n).toString()].reverse().join(''));
  const isMinus = Math.sign(n);
  return isMinus * reversedNum; // Сохраняем знак
};
