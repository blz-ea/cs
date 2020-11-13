import { BaseBinaryTreeNodeInterface } from '@ds/trees/types';

export type BinarySearchTreeNodeLeafType<T> = BinarySearchTreeNode<T> | null;

export default class BinarySearchTreeNode<T> implements BaseBinaryTreeNodeInterface<T> {
    left: BinarySearchTreeNodeLeafType<T> = null;
    right: BinarySearchTreeNodeLeafType<T> = null;
    parent: BinarySearchTreeNodeLeafType<T> = null;
    val: T;

    constructor(val: T = null, parent: BinarySearchTreeNode<T> = null) {
        this.val = val;
        this.parent = parent;
    }
}
