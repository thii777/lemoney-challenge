const changeState = require("../../src/helpers/change-state.helper");

describe("change state", () => {
  it("should return the new state", async () => {
    const exampleMock = {};

    const results = await changeState(exampleMock);

    expect(results).toMatchObject({
      // put yout code here
    });
  });
});
