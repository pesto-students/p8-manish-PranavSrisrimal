const mathOperations = require('./main');

describe("Mathematical operations tests", () => {
test("adding 2+2, should give 4", ()=>{
    expect(mathOperations.sum(2,2)).toBe(4);
});

test("subtracting 2 from 2, should give 0", ()=>{
    expect(mathOperations.diff(2,2)).toBe(0);
});

test("multiplying 2 with 4, should give 8", ()=>{
    expect(mathOperations.product(2,4)).toBe(8);
});

});