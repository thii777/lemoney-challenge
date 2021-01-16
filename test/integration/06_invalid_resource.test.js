const request = require("supertest");
const app = require("../../src/main/app");

describe("GET /api/v1/abacaxi", () => {
  beforeAll(async () => {
    endpoint = "/api/v1/abacaxi";
  });

  it("should return 404 when any invalid resources are sent", async () => {
    const response = await request(app).get(endpoint);
    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      statusCode: 404,
      message: "Cannot GET /abacaxi",
      error: "Not Found",
    });
  });
});
