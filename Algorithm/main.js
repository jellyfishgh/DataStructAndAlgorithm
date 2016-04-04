var util = require('./util.js');
var sorter = require('./sorter.js');

var array = util.initRandomArray(5);
util.printArray(array, true);
console.log(util.isSortedArray(array));

// var binaryArr = sorter.insertSortOne(array.slice(0));
// util.printArray(binaryArr);
// console.log(util.isSortedArray(binaryArr));
// var linearArr = sorter.insertSortOne(array.slice(0), true);
// util.printArray(linearArr);
// console.log(util.isSortedArray(linearArr));
// var linearArrTwo = sorter.insertSortTwo(array.slice(0));
// util.printArray(linearArrTwo);
// console.log(util.isSortedArray(linearArrTwo));

// sorter.mergeSort(array, 0, array.length - 1, 0);
// util.printArray(array);
// console.log(util.isSortedArray(array));

// sorter.quickSort(array, 0, array.length - 1, 0);
// util.printArray(array);
// console.log(util.isSortedArray(array));

// sorter.bubbleSort(array);
// util.printArray(array);
// console.log(util.isSortedArray(array));

// sorter.chooseSort(array);
// util.printArray(array);
// console.log(util.isSortedArray(array));

// sorter.shellSort(array);
// util.printArray(array);
// console.log(util.isSortedArray(array));

sorter.heapSort(array);
util.printArray(array, true);
console.log(util.isSortedArray(array));