import { expect } from "chai";

import { Example } from "../src/example/example";

describe("Example", () => {
  it("not null", () => {
    expect(new Example()).not.equal(null);
  });
});
