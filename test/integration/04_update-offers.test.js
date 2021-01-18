const request = require("supertest");
const app = require("../../src/main/app");

describe("UPDATE /api/v1/offers", () => {
  it("should return 200 and updated offer", async () => {
    const { body, status } = await request(app)
      .post("/api/v1/advertisers")
      .send({
        advertiser_name: "Carrefour",
      });

    const response = await request(app).put(`/api/v1/offers/${body.id}`).send({
      starts_at: "2021-01-24T00:27:25.000Z",
      ends_at: "2021-01-25T23:59:00.000Z",
      premium: false,
    });
    expect(response.status).toBe(200);
  });
});
