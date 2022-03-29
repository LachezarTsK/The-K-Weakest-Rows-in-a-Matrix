
/**
 * @param {number[][]} matrix
 * @param {number} targetRows
 * @return {number[]}
 */
var kWeakestRows = function (matrix, targetRows) {
    const results = new Array(targetRows);
    let indexResults = 0;

    const rows = matrix.length;
    const columns = matrix[0].length;

    for (let c = 0; c < columns && indexResults < targetRows; c++) {
        for (let r = 0; r < rows && indexResults < targetRows; r++) {
            if (matrix[r][c] === 0 && (c === 0 || matrix[r][c - 1] === 1)) {
                results[indexResults++] = r;
            }
        }
    }

    for (let r = 0; r < rows && indexResults < targetRows; r++) {
        if (matrix[r][columns - 1] === 1) {
            results[indexResults++] = r;
        }
    }

    return results;
};
