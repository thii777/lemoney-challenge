const request = require("supertest");
const app = require("../../src/main/app");

describe("POST /api/v1/offers", () => {
  it("should return 201 when offer is successfully created", async () => {
    const { body } = await request(app).post("/api/v1/advertisers").send({
      advertiser_name: "Pão de açucar",
    });

    const response = await request(app).post("/api/v1/offers").send({
      advertiser_id: body.id,
      url: "https://www.walmart.com/ip/LG-TONE-Free-HBS/892215549",
      description: "LG TONE Free HBS-FN4 Bluetooth",
      starts_at: "2021-01-10T00:27:25.000Z",
      ends_at: "2021-01-25T23:59:00.000Z",
      premium: false,
    });

    await expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      starts_at: "2021-01-10T00:27:25.000Z",
      ends_at: "2021-01-25T23:59:00.000Z",
      premium: false,
    });
  });

  it("should return 400 if missing some data", async () => {
    const response = await request(app).post("/api/v1/offers").send({
      description: "LG TONE Free HBS-FN4 Bluetooth",
      starts_at: "2021-01-10T00:27:25.000Z",
      ends_at: "2021-01-25T23:59:00.000Z",
      premium: false,
    });
    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      statusCode: 400,
      message: "missing data: advertiser_id,url",
    });
  });

  it("should return 400 if advertiser_id does not exist", async () => {
    const response = await request(app).post("/api/v1/offers").send({
      advertiser_id: 777,
      url: "https://www.walmart.com/ip/LG-TONE-Free-HBS/892215549",
      description: "LG TONE Free HBS-FN4 Bluetooth",
      starts_at: "2021-01-10T00:27:25.000Z",
    });

    await expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      statusCode: 400,
      message: "Advertiser does not exist",
    });
  });

  // it("should return 400 id start date is greater then end date", async () => {
  //   const response = await request(app).post("/api/v1/offers").send({
  //     description: "LG TONE Free HBS-FN4 Bluetooth® ",
  //     starts_at: "2021-01-25T00:27:25.000Z",
  //     ends_at: "2021-01-10T23:59:00.000Z",
  //     premium: false,
  //   });
  //   expect(response.status).toBe(400);
  //   expect(response.body).toMatchObject({
  //     statusCode: 400,
  //     message: "start date cannot be greater then end date",
  //   });
  // });
});
