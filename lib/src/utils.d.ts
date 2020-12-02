declare function getVal(paths: string, data: Record<string, any>): any;
declare function getVal<T, A extends keyof T>(paths: [A], data: T): T[A];
declare function getVal<T, A extends keyof T, B extends keyof T[A]>(paths: [A, B], data: T): T[A][B];
declare function getVal<T, A extends keyof T, B extends keyof T[A], C extends keyof T[A][B]>(paths: [A, B, C], data: T): T[A][B][C];
export declare const JTUtil: {
    getVal: typeof getVal;
    appendAfter(val: string, ...after: string[]): string;
    toString(val: any): string;
    toNumber(val: any): number;
    replace(val: string, oldStr: string, newStr: string): string;
    concat(...val: string[]): string;
};
export {};
