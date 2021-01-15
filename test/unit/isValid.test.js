const { isValidFields } = require("../../src/domain/validator/validField");

describe("validate field", () => {
  it("should return the missing fields", async () => {
    const offersMock = {
      advertiser_name: "Walmart",
    };

    const validField = await isValidFields(offersMock, [
      "advertiser_name",
      "url",
      "description",
    ]);

    expect(validField.error).toMatchObject(["url", "description"]);
  });

  it("should return undefined when all data is sent", async () => {
    const offersMock = {
      advertiser_name: "Walmart",
      url:
        "https://www.walmart.com/ip/SAMSUNG-Galaxy-Watch-Bluetooth-Smart-Watch-46mm-Silver-SM-R800NZSAXAR/163601874",
      description:
        "SAMSUNG Galaxy Watch - Bluetooth Smart Watch (46mm) - Silver - SM-R800NZSAXA",
    };

    const validField = await isValidFields(offersMock, [
      "advertiser_name",
      "url",
      "description",
    ]);

    expect(validField.error).toBe(undefined);
  });
});
