function analyzeArray(arr) {
  if (!arr.length) return {};

  const pickMin = (arr) => Math.min(...arr);
  const pickMax = (arr) => Math.max(...arr);
  const getAverage = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;

  return {
    average: getAverage(),
    min: pickMin(),
    max: pickMax(),
    length: arr.length,
  };
}

export default analyzeArray;
