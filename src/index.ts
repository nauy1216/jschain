import NumberChain from "./chain/NumberChain";
export * as NumberChain from "./chain/NumberChain";
import StringChain from "./chain/StringChain";
export * from "./chain/NumberChain";
import ObjectTransChain from "./chain/ObjectTransChain";
export * from "./chain/NumberChain";

export function number(value?: any) {
  return new NumberChain(value);
}
export function string(value?: any) {
  return new StringChain(value);
}
export function object(value?: any) {
  return new ObjectTransChain(value);
}
