const checkElement = (el) => {
  if (typeof el !== 'string' || el.length !== 1) {
    throw new Error('Element must be a string of length 1');
  } else if (!RegExp(/^\p{L}/, 'u').test(el)) {
    throw new Error('Element must be a char');
  }
};

const checkIndex = (index, arr) => {
  if (typeof index !== 'number') {
    throw new Error('Index must be a number');
  } else if (index < 0 || index >= arr.length) {
    throw new Error(`Index must be in the range from 0 to ${arr.length - 1}`);
  }
};

module.exports = {checkElement, checkIndex};
