function analyzeArray(array) {
  const sum = array.reduce((total, number) => total + number, 0);

  return {
    average: sum / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export default analyzeArray;
