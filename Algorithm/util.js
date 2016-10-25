var skipList = require('../DataStruct/sortedLinkedList.js')

export function initRandomArray(count) {
    var array = []
    for (let i = 0; i < count; i++) {
        array.push(Math.ceil((Math.random() + 1) * count * 2))
    }
    return array
}

export function isSortedArray(array) {
    if (array.length < 3) return true
    else {
        var flag = array[0] <= array[1]
        for (var i = 2; i < array.length; i++) {
            if (flag != array[i - 1] <= array[i]) return false
        }
        return true
    }
}

export function printArray(array, hasEle) {
    console.log('Elements in Array:')
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
            //默认不打印元素
        if (hasEle) console.log(array[i])
    }
    console.log('--- sum=' + sum + ' ---')
}

export function initListByArray(array) {
    var sll = new skipList.SortedLinkedList()
    for (var i = 0; i < array.length; i++) {
        sll.insert(array[i])
    }
    return sll
}

export function printLinkeList(list, hasEle) {
    console.log('Elements in LinkedList:')
    var sum = 0
    var root = list.root.getLink()
    while (root) {
        sum += root.getValue()
        if (hasEle) console.log(root.getValue())
        root = root.getLink()
    }
    console.log('--- sum=' + sum + ' ---')
}

export function isSortedList(list) {
    var root = list.root.getLink()
    while (root && root.getLink()) {
        if (root.getValue() > root.getLink().getValue()) return false
        root = root.getLink()
    }
    return true
}
