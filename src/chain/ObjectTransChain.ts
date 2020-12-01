import Chain from "./ChainType";

export default class ObjectChain extends Chain<Record<string, any>> {
  val = {};

  constructor(value?: any) {
    super();
    if (value) {
      this.val = value;
    }
  }

  toString() {
    //
  }
}
