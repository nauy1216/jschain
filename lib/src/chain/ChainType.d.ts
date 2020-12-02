export default abstract class Transform<T> {
    abstract val: T;
    get value(): T;
    set(value: T): this;
}
