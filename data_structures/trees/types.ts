export type BaseBinaryTreeNodeType<T> = BaseBinaryTreeNodeInterface<T> | null;

export abstract class BaseBinaryTreeNodeInterface<T> {
    val: T;
    left: BaseBinaryTreeNodeInterface<T>;
    right: BaseBinaryTreeNodeInterface<T>;
    parent?: BaseBinaryTreeNodeInterface<T>; // For easy deletion
}
