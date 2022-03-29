
public class Solution {

    public int[] kWeakestRows(int[][] matrix, int targetRows) {
        int[] results = new int[targetRows];
        int indexResults = 0;

        final int rows = matrix.length;
        final int columns = matrix[0].length;

        for (int c = 0; c < columns && indexResults < targetRows; c++) {
            for (int r = 0; r < rows && indexResults < targetRows; r++) {
                if (matrix[r][c] == 0 && (c == 0 || matrix[r][c - 1] == 1)) {
                    results[indexResults++] = r;
                }
            }
        }

        for (int r = 0; r < rows && indexResults < targetRows; r++) {
            if (matrix[r][columns - 1] == 1) {
                results[indexResults++] = r;
            }
        }

        return results;
    }
}
