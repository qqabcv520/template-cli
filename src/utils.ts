//
// export function pipe<R1, R2>(f1: () => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>): () => R2 | Promise<R2>;
// export function pipe<R1, R2, R3>(f1: () => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>): () => R3 | Promise<R3>;
// export function pipe<R1, R2, R3, R4>(f1: () => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>): () => R4 | Promise<R4>;
// export function pipe<R1, R2, R3, R4, R5>(f1: () => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>): () => R5 | Promise<R5>;
// export function pipe<R1, R2, R3, R4, R5, R6>(f1: () => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>): () => R6 | Promise<R6>;
// export function pipe<R1, R2, R3, R4, R5, R6, R7>(f1: () => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>): () => R7 | Promise<R7>;
// export function pipe<R1, R2, R3, R4, R5, R6, R7>(f1: () => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>, ...functions: Function[]): () => any;
//
// export function pipe<A1, R1, R2>(f1: (a1: A1) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>): (a1: A1) => R2 | Promise<R2>;
// export function pipe<A1, R1, R2, R3>(f1: (a1: A1) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>): (a1: A1) => R3 | Promise<R3>;
// export function pipe<A1, R1, R2, R3, R4>(f1: (a1: A1) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>): (a1: A1) => R4 | Promise<R4>;
// export function pipe<A1, R1, R2, R3, R4, R5>(f1: (a1: A1) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>): (a1: A1) => R5 | Promise<R5>;
// export function pipe<A1, R1, R2, R3, R4, R5, R6>(f1: (a1: A1) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>): (a1: A1) => R6 | Promise<R6>;
// export function pipe<A1, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>): (a1: A1) => R7 | Promise<R7>;
// export function pipe<A1, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>, ...functions: Function[]): (a1: A1) => any;
//
// export function pipe<A1, A2, R1, R2>(f1: (a1: A1, a2: A2) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>): (a1: A1, a2: A2) => R2 | Promise<R2>;
// export function pipe<A1, A2, R1, R2, R3>(f1: (a1: A1, a2: A2) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>): (a1: A1, a2: A2) => R3 | Promise<R3>;
// export function pipe<A1, A2, R1, R2, R3, R4>(f1: (a1: A1, a2: A2) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>): (a1: A1, a2: A2) => R4 | Promise<R4>;
// export function pipe<A1, A2, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>): (a1: A1, a2: A2) => R5 | Promise<R5>;
// export function pipe<A1, A2, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>): (a1: A1, a2: A2) => R6 | Promise<R6>;
// export function pipe<A1, A2, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>): (a1: A1, a2: A2) => R7 | Promise<R7>;
// export function pipe<A1, A2, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>, ...functions: Function[]): (a1: A1, a2: A2) => any;
//
// export function pipe<A1, A2, A3, R1, R2>(f1: (a1: A1, a2: A2, a3: A3) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>): (a1: A1, a2: A2, a3: A3) => R2 | Promise<R2>;
// export function pipe<A1, A2, A3, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>): (a1: A1, a2: A2, a3: A3) => R3 | Promise<R3>;
// export function pipe<A1, A2, A3, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>): (a1: A1, a2: A2, a3: A3) => R4 | Promise<R4>;
// export function pipe<A1, A2, A3, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>): (a1: A1, a2: A2, a3: A3) => R5 | Promise<R5>;
// export function pipe<A1, A2, A3, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>): (a1: A1, a2: A2, a3: A3) => R6 | Promise<R6>;
// export function pipe<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>): (a1: A1, a2: A2, a3: A3) => R7 | Promise<R7>;
// export function pipe<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>, ...functions: Function[]): (a1: A1, a2: A2, a3: A3) => any;
//
// export function pipe<A1, A2, A3, A4, R1, R2>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>): (a1: A1, a2: A2, a3: A3, a4: A4) => R2 | Promise<R2>;
// export function pipe<A1, A2, A3, A4, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>): (a1: A1, a2: A2, a3: A3, a4: A4) => R3 | Promise<R3>;
// export function pipe<A1, A2, A3, A4, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>): (a1: A1, a2: A2, a3: A3, a4: A4) => R4 | Promise<R4>;
// export function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>): (a1: A1, a2: A2, a3: A3, a4: A4) => R5 | Promise<R5>;
// export function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>): (a1: A1, a2: A2, a3: A3, a4: A4) => R6 | Promise<R6>;
// export function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>): (a1: A1, a2: A2, a3: A3, a4: A4) => R7 | Promise<R7>;
// export function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>, ...functions: Function[]): (a1: A1, a2: A2, a3: A3, a4: A4) => any;
//
// export function pipe<A1, A2, A3, A4, R1, R2>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2 | Promise<R2>;
// export function pipe<A1, A2, A3, A4, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3 | Promise<R3>;
// export function pipe<A1, A2, A3, A4, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4 | Promise<R4>;
// export function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5 | Promise<R5>;
// export function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6 | Promise<R6>;
// export function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7 | Promise<R7>;
// export function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>, ...functions: Function[]): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any;
//
// export function pipe(...functions: Function[]) {
//   return (...args: any[]) => {
//     return functions.reduce(((subArgs, func) => {
//       return [func(subArgs)];
//     }), args);
//   };
// }

export function asyncPipe<R1, R2>(f1: () => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>): () => Promise<R2>;
export function asyncPipe<R1, R2, R3>(f1: () => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>): () => Promise<R3>;
export function asyncPipe<R1, R2, R3, R4>(f1: () => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>): () => Promise<R4>;
export function asyncPipe<R1, R2, R3, R4, R5>(f1: () => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>): () => Promise<R5>;
export function asyncPipe<R1, R2, R3, R4, R5, R6>(f1: () => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>): () => Promise<R6>;
export function asyncPipe<R1, R2, R3, R4, R5, R6, R7>(f1: () => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>): () => Promise<R7>;
export function asyncPipe<R1, R2, R3, R4, R5, R6, R7>(f1: () => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>, ...functions: Function[]): () => any;

export function asyncPipe<A1, R1, R2>(f1: (a1: A1) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>): (a1: A1) => Promise<R2>;
export function asyncPipe<A1, R1, R2, R3>(f1: (a1: A1) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>): (a1: A1) => Promise<R3>;
export function asyncPipe<A1, R1, R2, R3, R4>(f1: (a1: A1) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>): (a1: A1) => Promise<R4>;
export function asyncPipe<A1, R1, R2, R3, R4, R5>(f1: (a1: A1) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>): (a1: A1) => Promise<R5>;
export function asyncPipe<A1, R1, R2, R3, R4, R5, R6>(f1: (a1: A1) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>): (a1: A1) => Promise<R6>;
export function asyncPipe<A1, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>): (a1: A1) => Promise<R7>;
export function asyncPipe<A1, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>, ...functions: Function[]): (a1: A1) => any;

export function asyncPipe<A1, A2, R1, R2>(f1: (a1: A1, a2: A2) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>): (a1: A1, a2: A2) => Promise<R2>;
export function asyncPipe<A1, A2, R1, R2, R3>(f1: (a1: A1, a2: A2) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>): (a1: A1, a2: A2) => Promise<R3>;
export function asyncPipe<A1, A2, R1, R2, R3, R4>(f1: (a1: A1, a2: A2) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>): (a1: A1, a2: A2) => Promise<R4>;
export function asyncPipe<A1, A2, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>): (a1: A1, a2: A2) => Promise<R5>;
export function asyncPipe<A1, A2, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>): (a1: A1, a2: A2) => Promise<R6>;
export function asyncPipe<A1, A2, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>): (a1: A1, a2: A2) => Promise<R7>;
export function asyncPipe<A1, A2, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>, ...functions: Function[]): (a1: A1, a2: A2) => any;

export function asyncPipe<A1, A2, A3, R1, R2>(f1: (a1: A1, a2: A2, a3: A3) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>): (a1: A1, a2: A2, a3: A3) => Promise<R2>;
export function asyncPipe<A1, A2, A3, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>): (a1: A1, a2: A2, a3: A3) => Promise<R3>;
export function asyncPipe<A1, A2, A3, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>): (a1: A1, a2: A2, a3: A3) => Promise<R4>;
export function asyncPipe<A1, A2, A3, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>): (a1: A1, a2: A2, a3: A3) => Promise<R5>;
export function asyncPipe<A1, A2, A3, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>): (a1: A1, a2: A2, a3: A3) => Promise<R6>;
export function asyncPipe<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>): (a1: A1, a2: A2, a3: A3) => Promise<R7>;
export function asyncPipe<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>, ...functions: Function[]): (a1: A1, a2: A2, a3: A3) => any;

export function asyncPipe<A1, A2, A3, A4, R1, R2>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>): (a1: A1, a2: A2, a3: A3, a4: A4) => Promise<R2>;
export function asyncPipe<A1, A2, A3, A4, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>): (a1: A1, a2: A2, a3: A3, a4: A4) => Promise<R3>;
export function asyncPipe<A1, A2, A3, A4, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>): (a1: A1, a2: A2, a3: A3, a4: A4) => Promise<R4>;
export function asyncPipe<A1, A2, A3, A4, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>): (a1: A1, a2: A2, a3: A3, a4: A4) => Promise<R5>;
export function asyncPipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>): (a1: A1, a2: A2, a3: A3, a4: A4) => Promise<R6>;
export function asyncPipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>): (a1: A1, a2: A2, a3: A3, a4: A4) => Promise<R7>;
export function asyncPipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>, ...functions: Function[]): (a1: A1, a2: A2, a3: A3, a4: A4) => any;

export function asyncPipe<A1, A2, A3, A4, R1, R2>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => Promise<R2>;
export function asyncPipe<A1, A2, A3, A4, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => Promise<R3>;
export function asyncPipe<A1, A2, A3, A4, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => Promise<R4>;
export function asyncPipe<A1, A2, A3, A4, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => Promise<R5>;
export function asyncPipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => Promise<R6>;
export function asyncPipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => Promise<R7>;
export function asyncPipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1 | Promise<R1>, f2: (a: R1) => R2 | Promise<R2>, f3: (a: R2) => R3 | Promise<R3>, f4: (a: R3) => R4 | Promise<R4>, f5: (a: R4) => R5 | Promise<R5>, f6: (a: R5) => R6 | Promise<R6>, f7: (a: R6) => R7 | Promise<R7>, ...functions: Function[]): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any;
// 包含Promise异步情况的Pipe
export function asyncPipe(...functions: Function[]) {
  return async (...args: any[]) => {
    let nextArgs = args;
    for (const func of functions) {
      const result = func(nextArgs);
      if (Promise != undefined && result instanceof Promise) {
        nextArgs = [await result];
      } else {
        nextArgs = [result];
      }
    }
    return nextArgs[0];
  };
}


export function sleep(t: number) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(timer);
    }, t);
  });
}
