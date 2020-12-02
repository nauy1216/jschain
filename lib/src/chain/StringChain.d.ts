import Chain from "./ChainType";
import NumberChain from "./NumberChain";
export default class StringChain extends Chain<string> {
    val: string;
    constructor(value?: any);
    appendAfter(...after: string[]): StringChain;
    toNumber(): NumberChain;
}
