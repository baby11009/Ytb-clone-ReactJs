export const formatNumber = function (number = 0) {
  if (number >= 1000000000) {
    return `${(number / 1000000000).toFixed(0)} T`;
  } else if (number >= 1000000) {
    return `${(number / 1000000).toFixed(0)} Tr`;
  } else if (number >= 1000) {
    if (number < 99999 && number % 1000 !== 0) {
      return `${(number / 1000).toFixed(1)} N`;
    }
    return `${(number / 1000).toFixed(0)} N`;
  } else {
    return number.toString();
  }
};
