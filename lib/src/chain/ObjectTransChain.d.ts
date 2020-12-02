import Chain from "./ChainType";
export default class ObjectChain extends Chain<Record<string, any>> {
    val: {};
    constructor(value?: any);
    toString(): void;
}
