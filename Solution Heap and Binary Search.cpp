
#include <array>
#include <queue>
#include <vector>
using namespace std;

class Solution {

    struct ComparatorGreaterOnTop {
        bool operator()(const array<int, 2>& first, const array<int, 2>& second) {
            return first[0] == second[0] ? second[1] > first[1] : second[0] > first[0];
        }
    };
    
    typedef priority_queue<array<int, 2>, vector<array<int, 2 >>, ComparatorGreaterOnTop> MaxHeap;

public:

    vector<int> kWeakestRows(vector<vector<int>>& matrix, int targetRows) {

        MaxHeap maxHeap;
        const size_t rows = matrix.size();

        for (int r = 0; r < rows; r++) {
            int strength = binarySearch_findIndexFirstZero(matrix[r]);
            maxHeap.push(array<int, 2>{strength, r});
            if (maxHeap.size() > targetRows) {
                maxHeap.pop();
            }
        }
        return putResultsInArray(maxHeap);
    }

private:

    int binarySearch_findIndexFirstZero(const vector<int>& row) {
        size_t left = 0;
        size_t right = row.size();

        while (left < right) {
            size_t mid = left + (right - left) / 2;
            if (row[mid] == 1) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    vector<int> putResultsInArray(MaxHeap& maxHeap) {
        vector<int> results(maxHeap.size(), 0);
        size_t index = results.size() - 1;
        while (!maxHeap.empty()) {
            results[index--] = maxHeap.top()[1];
            maxHeap.pop();
        }
        return results;
    }
};
