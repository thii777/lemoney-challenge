const formatTime = require("../../src/helpers/date.helper");

describe("Test current date time", () => {
  it("should return the current time", async () => {
    const results = await formatTime.offerDate("2021-01-25T23:59:00.000Z");
    expect(results).toBe("2021-01-25 20:59:00");
  });
});
