const formatTime = require("../../src/helpers/date.helper");

describe("change state", () => {
  it("should return the current time", async () => {
    const exampleMock = {};

    const results = await formatTime(exampleMock);

    expect(results).toMatchObject({
      // put yout code here
    });
  });
});
