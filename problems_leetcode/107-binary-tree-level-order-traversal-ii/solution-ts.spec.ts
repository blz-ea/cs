import { binaryTreeLevelOrderTraversalBottomRecursive, binaryTreeLevelOrderTraversalBottomStack } from './solution-ts';
import binaryTreeCreateBFS from '@ds/trees/binary_tree/typescript/binaryTreeCreateBFS';

describe('Testing binary tree level order traversal II', () => {
    it('should traverse tree using recursive method', () => {
        const tree = binaryTreeCreateBFS([3, 9, 20, null, null, 15, 7]);
        expect(binaryTreeLevelOrderTraversalBottomRecursive(tree)).toEqual([[15, 7], [9, 20], [3]]);
    });
    it('should traverse tree using stack', () => {
        const tree = binaryTreeCreateBFS([3, 9, 20, null, null, 15, 7]);
        expect(binaryTreeLevelOrderTraversalBottomStack(tree)).toEqual([[15, 7], [9, 20], [3]]);
    });
});
