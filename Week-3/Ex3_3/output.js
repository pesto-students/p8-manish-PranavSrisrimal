function createIncrement() {
  let count = 0;

  function increment() {
    count++;
  }

  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement(); // function initialized
increment(); // Value of count = 1
increment(); // Value of count = 2
increment(); // Value of count = 3
log(); //Count is 0

// This is because f log() and f increment() are different functions with different scopes. Although, value of count gets updated
// in the scope of f increment(), message accessess the value its scope, i.e., scope of f createIncrement()
