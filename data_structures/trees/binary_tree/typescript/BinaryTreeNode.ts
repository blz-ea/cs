import { BaseBinaryTreeNodeInterface, BaseBinaryTreeNodeType } from '@ds/trees/types';

export default class BinaryTreeNode<T> implements BaseBinaryTreeNodeInterface<T> {
    val: T;
    left: BaseBinaryTreeNodeType<T>;
    right: BaseBinaryTreeNodeType<T>;

    constructor(val: T, left: BaseBinaryTreeNodeType<T> = null, right: BaseBinaryTreeNodeType<T> = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
