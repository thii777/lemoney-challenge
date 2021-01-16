const request = require("supertest");
const app = require("../../src/main/app");

describe("POST /api/v1/offers", () => {
  it("should return 201 when offer is successfully created", async () => {
    const response = await request(app).post("/api/v1/offers").send({
      advertiser_id: 1,
      url:
        "https://www.walmart.com/ip/LG-TONE-Free-HBS-FN4-Bluetooth-Wireless-Stereo-Earbuds-with-Meridian-Audio-Black/892215549",
      description:
        "LG TONE Free HBS-FN4 Bluetooth® Wireless Stereo Earbuds with Meridian Audio, Black",
      starts_at: "2021-01-10T00:27:25.000Z",
      ends_at: "2021-01-25T23:59:00.000Z",
      premium: false,
    });
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      url:
        "https://www.walmart.com/ip/LG-TONE-Free-HBS-FN4-Bluetooth-Wireless-Stereo-Earbuds-with-Meridian-Audio-Black/892215549",
      description:
        "LG TONE Free HBS-FN4 Bluetooth® Wireless Stereo Earbuds with Meridian Audio, Black",
      starts_at: "2021-01-10T00:27:25.000Z",
      ends_at: "2021-01-25T23:59:00.000Z",
      premium: false,
    });
  });

  it("should return 400 if missing some data", async () => {
    const response = await request(app).post("/api/v1/offers").send({
      description:
        "LG TONE Free HBS-FN4 Bluetooth® Wireless Stereo Earbuds with Meridian Audio, Black",
      starts_at: "2021-01-10T00:27:25.000Z",
      ends_at: "2021-01-25T23:59:00.000Z",
      premium: false,
    });
    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      statusCode: 400,
      message: `missing data: ${results.error}`,
    });
  });

  it("should return 400 if date of the offers has wrong", async () => {
    const response = await request(app).post("/api/v1/offers").send({
      description:
        "LG TONE Free HBS-FN4 Bluetooth® Wireless Stereo Earbuds with Meridian Audio, Black",
      starts_at: "2021-01-10T00:27:25.000Z",
      ends_at: "2021-01-25T23:59:00.000Z",
      premium: false,
    });

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      statusCode: 400,
      message: `date has wrong`,
    });
  });
});
