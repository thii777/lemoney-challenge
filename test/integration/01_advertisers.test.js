const request = require("supertest");
const app = require("../../src/main/app");

describe("POST /api/v1/offers", () => {
  it("should return 201 when user is successfully created", async () => {
    const response = await request(app).post("/api/v1/advertisers").send({
      advertiser_name: "Walmart",
    });
    expect(response.status).toBe(201);
  });
});
