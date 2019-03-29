export function compose(...functions: Function[]) {
  return async (parameter?: any) => {
    let result = parameter;
    for (const func of functions) {
      result = await func(result);
    }
  };
}

function recursive() {

}

export function sleep(t: number) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(timer);
    }, t);
  });
}
