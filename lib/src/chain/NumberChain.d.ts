import Chain from "./ChainType";
import StringTransform from "./StringChain";
export default class NumberChain extends Chain<number> {
    val: number;
    constructor(value?: any);
    toString(): StringTransform;
}
