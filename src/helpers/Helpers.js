export const addItemToList = (arr, item) => {
  let updatedArr = [];
  if (item === '' || arr.includes(item)) {
    return arr;
  }
  if (!arr.includes(item) && arr.length > 0) {
    updatedArr = [...arr, item];
    return updatedArr;
  } else {
    updatedArr.push(item);
    return updatedArr;
  }
};

export const pickOneOption = (arr) => {
  let selectedOption;
  const randomIndex = Math.floor(Math.random() * arr.length);
  selectedOption = arr[randomIndex];
  return selectedOption;
};
