const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// let item = items => items[0];
// console.log(item(items));

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
};

function firstItemCB(index) {
  console.log(index);
};
firstItem(items, firstItemCB);



const showLength = (items.length);
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}
getLength(items, (showLength) => {
  console.log(showLength);
});


let lastItem = (items.pop);
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[3]);
}
 last(items, (lastItem) => {
   console.log(lastItem);
 });



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
 cb(x + y);
};

sumNums(5, 10, function(sum) {
  console.log(`The sum is ${sum}`);
});



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
