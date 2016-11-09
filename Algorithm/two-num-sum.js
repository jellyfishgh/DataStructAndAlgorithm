/**
some nums (eg: [1, 4, 2, 6, ...])
are there two nums whose sum is x(eg: 7)?
*/

function find(arr, sum) {
    console.log(`sum: ${sum}`)
    printArr(arr)
    arr.sort((x, y) => {
        return x - y
    })
    printArr(arr)
    let i = 0, j = arr.length - 1
    while(i < j) {
        if(arr[i] + arr[j] < sum) i++
        else if(arr[i] + arr[j] === sum) return true
        else if(arr[i] + arr[j] > sum) j--
    }
    return false
}

function printArr(arr) {
    arr.map((item) => {
        console.log(item)
    })
    console.log('------')
}

function initArr(count) {
    const arr = new Array(count)
    for(let i = 0; i < count; i++) {
        arr[i] = Math.ceil(Math.random() * count)
    }
    return arr
}

const args = process.argv.slice(2)
const arr = initArr(args[0])
const sum = args[1]
// const arr = [3, 4, 5, 2, 1]
// const sum = 4
console.log(find(arr, sum))