/*
Ascending：升序，Descending:降序
默认为升序，改变了原始数组
默认为二分查找
*/
// --------------插入排序-------------
//
function insertSortOne(array, linear) {
    var now = new Date();
    if (array.length > 1) {
        for (var i = 1; i < array.length; i++) {
            if (!linear) insertAtLocation(array, i - 1, array[i], binarySearchLocation(array, 0, i - 1, array[i]));
            else insertAtLocation(array, i - 1, array[i], linearSearchLocation(array, i - 1, array[i]));
        }
    }
    console.log("One Spent Time: " + (new Date() - now));
    return array;
}

function insertSortTwo(array) {
    var now = new Date();
    if (array.length > 1) {
        var temp;
        for (var i = 1; i < array.length; i++) {
            if (array[i] < array[i - 1]) {
                temp = array[i];
                for (var j = i - 1; j >= 0; j--) {
                    array[j + 1] = array[j];
                    if (array[j] <= temp) break;
                }
                array[j + 1] = temp;
            }
        }
    }
    console.log("Two Spent Time: " + (new Date() - now));
    return array;
}

//把item插入到arr的location位置，location及其以后的元素顺次后移
function insertAtLocation(arr, end, item, location) {
    for (var j = end + 1; j > location; j--) {
        arr[j] = arr[j - 1];
    }
    arr[location] = item;
}

/*
找到item升序数组sortedArray中的位置location
*/
//顺序遍历查找
function linearSearchLocation(sortedArray, end, item) {
    for (var i = 0; i < end + 1; i++) {
        //相等的时候不插入，减少移动的次数
        if (sortedArray[i] > item) break;
    }
    return i;
}
//二分查找
function binarySearchLocation(sortedArray, start, end, item) {
    var middle = Math.floor((start + end) / 2);
    //  console.log(start, middle, end);
    if (start > end) {
        return start;
    } else {
        if (sortedArray[middle] <= item) {
            return binarySearchLocation(sortedArray, middle + 1, end, item);
        } else {
            return binarySearchLocation(sortedArray, start, middle - 1, item);
        }
    }
}



// --------------归并排序-------------
// Time: O(N*logN)
function mergeArray(arr, l, m, r) {
    var i = l,
        j = m + 1,
        k = 0,
        temp = [];
    while (i <= m && j <= r) {
        if (arr[i] < arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }
    while (i <= m) temp[k++] = arr[i++];
    while (j <= r) temp[k++] = arr[j++];
    for (i = l; i <= r; i++) arr[i] = temp[i - l];
}

function mergeSort(arr, l, r) {
    if (l < r) {
        var m = Math.floor((l + r) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        mergeArray(arr, l, m, r);
    }
}

// --------------快速排序-------------
// Time: O(N*logN)
function quickSort(arr, low, high) {
    if (low >= high) return;
    else {
        var i = low,
            j = high,
            pivot = arr[low];
        while (i < j) {
            while (i < j && arr[j] >= pivot) j--;
            if (i < j) arr[i++] = arr[j];
            while (i < j && arr[i] < pivot) i++;
            if (i < j) arr[j--] = arr[i];
        }
        arr[i] = pivot;
        quickSort(arr, low, i - 1);
        quickSort(arr, i + 1, high);
    }
}

function swap(arr, x, y) {
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
// --------------冒泡排序-------------
// Time: O(N*N)
function bubbleSort(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
        }
    }
}

// --------------选择排序-------------
// Time: O(N*N)
function chooseSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = arr.length - 1; j > i; j--) {
            if (arr[j] < arr[min]) min = j;
        }
        swap(arr, i, min);
    }
}

// --------------希尔排序-------------
// Time: 平均O(N*LogN)，O(N^s)(1<s<2)，O(N^1.3)
function shellSort(array) {
    var gap = Math.floor(array.length / 2);
    while (gap > 0) {
        for (var i = gap; i < array.length; i++) {
            for (var j = i - gap; j >= 0 && array[j] > array[j + gap]; j -= gap) swap(array, j, j + gap);
        }
        gap = Math.floor(gap / 2);
    }
}

// --------------堆排序-------------
// Time: O(N*LogN)
function getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
}

function getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
}

function getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
}
//最小堆
function minHeapFixup(arr, n) {
    var j = getParentIndex(n),
        temp = arr[n];
    while (j >= 0 && n != 0) {
        if (a[j] <= temp) break;
        a[n] = a[j];
        n = j;
        j = getParentIndex(j);
    }
    arr[n] = temp;
}

function addEle(arr, ele) {
    var n = arr.length;
    arr[n] = ele;
    minHeapFixup(arr, n);
}

function minHeapFixdown(arr, i, n) {
    var j = getLeftChildIndex(i), temp = arr[i];
    while (j < n) {
        if (j + 1 < n && arr[j + 1] < arr[j]) j++;
        if (arr[j] >= temp) break;
        arr[i] = arr[j];
        i = j;
        j = getLeftChildIndex(i);
    }
    arr[i] = temp;
}

function deleteEle(arr, index) {
    swap(arr, 0, index - 1);
    minHeapFixdown(a, 0, index - 1);
}

function makeMinHeap(arr) {
    var n = arr.length - 1,
        i = Math.floor(n / 2 - 1);
    for (; i >= 0; i--) minHeapFixdown(arr, i, n);
}

function heapSort(array) {
	for (var i = array.length - 1; i >= 1; i--) {
		swap(array, i, 0);
		minHeapFixdown(array, 0, i);
	}
}


exports.insertSortOne = insertSortOne;
exports.insertSortTwo = insertSortTwo;
exports.mergeSort = mergeSort;
exports.quickSort = quickSort;
exports.bubbleSort = bubbleSort;
exports.chooseSort = chooseSort;
exports.shellSort = shellSort;
exports.heapSort = heapSort;//未检测成功
