const request = require("supertest");
const app = require("../../src/main/app");

describe("POST /api/v1/advertisers", () => {
  it("should return 201 when advertisers is successfully created", async () => {
    const response = await request(app).post("/api/v1/advertisers").send({
      advertiser_name: "Walmart",
    });
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      advertiser_name: "Walmart",
    });
  });

  it("should return 400 when advertisers already exist", async () => {
    const response = await request(app).post("/api/v1/advertisers").send({
      advertiser_name: "Walmart",
    });
    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      statusCode: 400,
      message: "Advertiser already exist",
    });
  });
});
