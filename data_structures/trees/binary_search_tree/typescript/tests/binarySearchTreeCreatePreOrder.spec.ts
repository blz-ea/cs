import { createBinarySearchTreePreOrder } from '@ds/trees/binary_search_tree/typescript/binarySearchTreeCreatePreOrder';
import DepthFirstTraversalInOrder from '@ds/trees/binary_tree_traverse/typescript/inOrder';

test('should construct binary search tree from `preOrder` array', () => {
    /** Constructs below tree
     *       15
     *   10     20
     *  8  12 16  25
     */
    const testData = [15, 10, 8, 12, 20, 16, 25];
    const tree = createBinarySearchTreePreOrder(testData);
    expect(DepthFirstTraversalInOrder(tree)).toEqual(testData.sort((a, b) => a - b));
});
