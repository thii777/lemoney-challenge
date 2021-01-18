const { isValidFields } = require("../../src/domain/validator/validField");

describe("validate field", () => {
  it("should return the missing fields", async () => {
    const dataMock = {
      advertiser_name: "Walmart",
    };

    const validField = await isValidFields(dataMock, [
      "advertiser_name",
      "url",
      "description",
    ]);
    expect(validField.error).toMatchObject(["url", "description"]);
  });

  it("should return undefined when all data is sent", async () => {
    const dataMock = {
      advertiser_name: "Walmart",
      url: "https://www.walmart.com/ip/SAMSUNG-Galaxy-Watch",
      description: "SAMSUNG Galaxy Watch ",
    };
    const validField = await isValidFields(dataMock, [
      "advertiser_name",
      "url",
      "description",
    ]);
    expect(validField.error).toBe(undefined);
  });
});
