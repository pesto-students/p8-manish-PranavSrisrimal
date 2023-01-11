//Object 'car'
let car = {
  name: "Pagani Huayra",
  model: "Roadster",
};

//method accpets 'price' as arg and has existing property 'name' and 'details'
let printDetails = function (price, top_speed) {
  console.log(
    this.name +
      " " +
      this.model +
      " " +
      price +
      " with top speed of " +
      top_speed
  );
};

//Object 'bike'
let bike = {
  name: "Suzuki Hayabusa",
  model: "GSX1300R",
};

//call method - accepts args as comma separated values
printDetails.call(car, "$3.5M", "383 km/h");
printDetails.call(bike, "$20,000", "292 km/h");

//apply method - similar to call but accepts args as an array
printDetails.apply(car, ["$3.5M", "383 km/h"]);
printDetails.apply(bike, ["$20,000", "292 km/h"]);

//bind method - creates copy of a method and can be invoked later in the program
let myCarDetails = printDetails.bind(car, "$3.5M", "383 km/h");
let myBikeDetails = printDetails.bind(bike, "$20,000", "292 km/h");

//......after n lines of code
myCarDetails();
myBikeDetails();
