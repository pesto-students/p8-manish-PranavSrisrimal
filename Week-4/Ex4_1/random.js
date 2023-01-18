function getNumber() {
  return new CustomPromise((res, rej) => {
    console.time();
    setTimeout(() => {
      if (Math.floor(Math.random() * 100) % 5 == 0){
        res("Resolved : Not divisible by 5");
      } else {
        rej("Rejected : Divisible by 5");
      }
    }, 1500);
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

getNumber()
  .then((res) => {
    console.log(res);
    console.timeEnd();
  })
  .catch((err) => {
    console.log(err);
    console.timeEnd();
  });