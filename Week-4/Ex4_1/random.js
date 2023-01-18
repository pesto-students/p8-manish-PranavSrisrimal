function getNumber() {
  return new CustomPromise((res, rej) => {
    console.time();
    setTimeout(() => {
      if (Math.floor(Math.random() * 100) % 5 == 0){
        res("Resolved : Not divisible by 5");
        console.timeEnd();
      } else {
        rej("Rejected : Divisible by 5");
        console.timeEnd();
      }
    }, 2000);
  });
}

function CustomPromise(executor) {
  let onResolve;
  let onReject;
  this.then = function (fn) {
    onResolve = fn;
    return this; // for chaining
  };
  this.catch = function (fn) {
    onReject = fn;
    return this; //for chaining
  };
  function res(val) {
    onResolve(val);
  }
  function rej(val) {
    onReject(val);
  }
  executor(res, rej);
}