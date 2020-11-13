export type Undefined<T> = T | undefined;
export type Nullable<T> = T | null;

export interface ILinkedList<T> {
    isEmpty: boolean;
    push(value: T): this;
    pop(): Undefined<T>;
    shift(): T;
    unshift(value: T): this;
    toArray(): unknown[];
    fromArray(array: T[]): this;
}

export interface ILinkedListNode<T> {
    val: T;
    next: ILinkedListNode<T> | null;
    previous?: ILinkedListNode<T> | null;
    key?: number | string;
    fromArray(vals: T[]): this;
    toArray(): T[];
    reverse(): ILinkedListNode<T>;
}
