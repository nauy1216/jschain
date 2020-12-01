import { JTUtil } from "../utils";
import Chain from "./ChainType";
import NumberChain from "./NumberChain";
export default class StringChain extends Chain<string> {
  val = "";

  constructor(value?: any) {
    super();
    if (value) {
      this.val = String(value);
    }
  }

  appendAfter(...after: string[]): StringChain {
    this.val = JTUtil.appendAfter(this.value, ...after);
    return this as any;
  }

  toNumber(): NumberChain {
    return new NumberChain(this.val);
  }
}
