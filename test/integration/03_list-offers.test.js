const request = require("supertest");
const app = require("../../src/main/app");

describe("GET /api/v1/offers", () => {
  it("should return 200 and enable offers", async () => {
    const response = await request(app).get("/api/v1/offers");
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject([]);
  });
});
