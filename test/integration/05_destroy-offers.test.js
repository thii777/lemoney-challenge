const request = require("supertest");
const app = require("../../src/main/app");

describe("DELETE /api/v1/offers", () => {
  it("should return 200 and updated offer", async () => {
    const { body } = await request(app).post("/api/v1/advertisers").send({
      advertiser_name: "Guanabara",
    });

    const response = await request(app).delete(`/api/v1/offers/${body.id}`);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      statusCode: 200,
      message: "Deleted sucessfully",
    });
  });

  // it("should return 400 and message when offer does not exist for delete", async () => {
  //   const response = await request(app).delete("/api/v1/offers");

  //   expect(response.status).toBe(400);
  //   expect(response.body).toMatchObject({
  //     statusCode: 400,
  //     message: "offer does not exist",
  //   });
  // });
});
