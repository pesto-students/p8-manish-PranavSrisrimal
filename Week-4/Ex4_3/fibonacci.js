const fibo = (n) => ({
  [Symbol.iterator]: () => {
    let num = 1;
    let first = 0, second = 0;
    return {
      next: () => {
        if (num++ <= n) {
          [first, second] = [second, first + second || 1];

          return {
            value: first,
            done: false,
          };
        } else {
          return { done: true };
        }
      },
    };
  }
});

console.log("The Fibonacci Series is:");

for (let k of fibo(6)) {
  console.log(k);
}
