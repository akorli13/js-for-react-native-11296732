function processArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 === 0) {
      newArray.push(num ** 2);
    } else {
      newArray.push(num * 3);
    }
  }
  return newArray;
}

const newArray = processArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(newArray);

function formatArrayStrings(stringArray, numberArray) {
  const newStrings = [];

  for (let i = 0; i < stringArray.length; i++) {
    let str = stringArray[i];
    let num = numberArray[i];

    if (num % 2 === 0) {
      newStrings.push(str.toUpperCase());
    } else {
      newStrings.push(str.toLowerCase());
    }
  }

  return newStrings;
}

const names = [
  "peter",
  "paul",
  " jane",
  " nichelle ",
  "ricky",
  "damian",
  "bane",
  "dennis",
  "wayne",
];

const newMessage = formatArrayStrings(names, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(newMessage);
