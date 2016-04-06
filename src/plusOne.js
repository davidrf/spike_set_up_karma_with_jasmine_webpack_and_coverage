import _ from 'lodash';
const plusOne = (number, option = false) => {
  if (option) {
    return 'meow';
  } else {
    return number + 2;
  }
};
export default plusOne;
