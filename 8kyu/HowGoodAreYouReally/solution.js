function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const result = classPoints.reduce((sum, current) => sum + current, 0);
  return result/classPoints.length < yourPoints ? true : false;
}