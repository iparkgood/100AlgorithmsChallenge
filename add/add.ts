import { textSpanOverlap, TypeFormatFlags } from "typescript";

export function add(param1: number, param2: number): number {
  return param1 + param2;
}

export function add2(...param1: number[]): number {
  const result = param1.reduce((total, num) => {
    return (total += num);
  }, 0);
  return result;
}
