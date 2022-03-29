
#include <vector>
using namespace std;

class Solution {
    
public:

    vector<int> kWeakestRows(vector<vector<int>>&matrix, int targetRows) {

        vector<int> results(targetRows);
        int indexResults = 0;

        const size_t rows = matrix.size();
        const size_t columns = matrix[0].size();

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
};
