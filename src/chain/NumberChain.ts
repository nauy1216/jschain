import Chain from "./ChainType";
import StringTransform from "./StringChain";
export default class NumberChain extends Chain<number> {
  val!: number;

  constructor(value?: any) {
    super();
    if (value) {
      this.val = Number(value);
    }
  }

  toString(): StringTransform {
    return new StringTransform(this.val);
  }
}
