var Random = require("../index").Random;

describe("Random is a random number generator", function() {

  it("can generate the same random number from a seed", function() {
    var r = new Random(100);
    expect(r.rand()).toBeCloseTo(0.9185615684837103, 16);
  });

  it("can generate the same random int from a seed", function() {
    var r = new Random(100);
    expect(r.randInt(100)).toEqual(91);
  });
});
