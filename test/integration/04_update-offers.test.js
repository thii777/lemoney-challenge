const request = require("supertest");
const app = require("../../src/main/app");

describe("UPDATE /api/v1/offers", () => {
  it("should return 200 and updated offer", async () => {
    const response = await request(app).put("/api/v1/offers");

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      state: "enable",
    });
  });

  it("should return 400 and message when offer does not exist for update", async () => {
    const response = await request(app).put("/api/v1/offers");

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      statusCode: 400,
      message: "offer does not exist",
    });
  });
});
