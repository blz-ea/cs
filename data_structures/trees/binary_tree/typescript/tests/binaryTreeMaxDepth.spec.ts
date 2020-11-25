import binaryTreeCreateBFS from '../binaryTreeCreateBFS';
import binaryTreeMaxDepth, { binaryTreeMaxDepthIterative } from '../binaryTreeMaxDepth';

describe('testing Binary Tree - Max Depth', () => {
    it('should return max depth', () => {
        const tree = binaryTreeCreateBFS<number | null>([3, 9, 20, null, null, 15, 7]);
        expect(binaryTreeMaxDepth(tree)).toBe(3);
    });

    it('should return max depth - iterative solution', () => {
        const tree = binaryTreeCreateBFS<number | null>([3, 9, 20, null, null, 15, 7]);
        expect(binaryTreeMaxDepthIterative(tree)).toBe(3);
    });
});
