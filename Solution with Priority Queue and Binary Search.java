
import java.util.PriorityQueue;

public class Solution {

    public int[] kWeakestRows(int[][] matrix, int targetRows) {

        PriorityQueue<int[]> maxHeap = new PriorityQueue<>(targetRows, (first, second) -> comparatorGreaterOnTop(first, second));
        final int rows = matrix.length;

        for (int r = 0; r < rows; r++) {
            int strength = binarySearch_findIndexFirstZero(matrix[r]);
            maxHeap.add(new int[]{strength, r});
            if (maxHeap.size() > targetRows) {
                maxHeap.poll();
            }
        }
        return putResultsInArray(maxHeap);
    }

    private int comparatorGreaterOnTop(int[] first, int[] second) {
        return first[0] == second[0] ? second[1] - first[1] : second[0] - first[0];
    }

    private int binarySearch_findIndexFirstZero(int[] row) {
        int left = 0;
        int right = row.length;

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (row[mid] == 1) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    private int[] putResultsInArray(PriorityQueue<int[]> maxHeap) {
        int[] results = new int[maxHeap.size()];
        int index = results.length - 1;
        while (!maxHeap.isEmpty()) {
            results[index--] = maxHeap.poll()[1];
        }
        return results;
    }
}
