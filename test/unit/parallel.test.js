const { isValidFields } = require("../../src/domain/validator/validField");

describe("validate field", () => {
  it("should return the missing fields", async () => {
    const exampleMock = {
      name: "Thiago",
      email: "",
      password: "",
    };

    const validField = await isValidFields(exampleMock, [
      "name",
      "email",
      "password",
    ]);

    expect(validField.error).toMatchObject(["email", "password"]);
  });

  it("should return undefined when all data is sent", async () => {
    const exampleMock = {
      name: "Thiago",
      email: "thiagocarvalho.ads@gmail.com",
      password: "123",
    };

    const validField = await isValidFields(exampleMock, [
      "name",
      "email",
      "password",
    ]);

    expect(validField.error).toBe(undefined);
  });
});
