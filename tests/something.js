const test = require("tape");

test("gotta test something", function (t) {
  t.plan(1);
  t.equal(typeof Date.now, "function");
});
