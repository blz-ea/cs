import { isBalanced, isBalancedIterative } from '@ds/trees/binary_tree/typescript/binaryTreeIsBalanced';
import binaryTreeCreateBFS from '@ds/trees/binary_tree/typescript/binaryTreeCreateBFS';

const testTreeBalanced = binaryTreeCreateBFS([3, 9, 20, null, null, 15, 7]);
const testTreeUnbalanced = binaryTreeCreateBFS([1, 2, 2, 3, 3, null, null, 4, 4]);

describe('Testing isBalanced', () => {
    it('should check if tree is a balanced tree - recursive', () => {
        expect(isBalanced(testTreeBalanced)).toBe(true);
        expect(isBalanced(testTreeUnbalanced)).toBe(false);
    });

    it('should check if tree is a balanced tree - iterative', () => {
        expect(isBalancedIterative(testTreeBalanced)).toBe(true);
        expect(isBalancedIterative(testTreeUnbalanced)).toBe(false);
    });
});
