
const {PriorityQueue} = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} matrix
 * @param {number} targetRows
 * @return {number[]}
 */
var kWeakestRows = function (matrix, targetRows) {
    const maxHeap = new MaxPriorityQueue({compare: (first, second) => comparatorGreaterOnTop(first, second)});
    const rows = matrix.length;

    for (let r = 0; r < rows; r++) {
        let strength = binarySearch_findIndexFirstZero(matrix[r]);
        maxHeap.enqueue([strength, r]);
        if (maxHeap.size() > targetRows) {
            maxHeap.dequeue();
        }
    }
    return putResultsInArray(maxHeap);
};

/**
 * @param {number[]} first
 * @param {number[]} second
 * @return {number}
 */
function comparatorGreaterOnTop(first, second) {
    return first[0] === second[0] ? second[1] - first[1] : second[0] - first[0];
}

/**
 * @param {number[]} row
 * @return {number}
 */
function  binarySearch_findIndexFirstZero(row) {
    let left = 0;
    let right = row.length;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (row[mid] === 1) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

/**
 * @param {PriorityQueue{number[]}} maxHeap
 * @return {number[]}
 */
function putResultsInArray(maxHeap) {
    const results = new Array(maxHeap.size());
    let index = results.length - 1;
    while (!maxHeap.isEmpty()) {
        results[index--] = maxHeap.dequeue()[1];
    }
    return results;
}
