const request = require("supertest");
const app = require("../../src/main/app");

describe("POST /api/v1/offers", () => {
  it("test", async () => {
    const result = 5 + 2;
    expect(result).toBe(7);
  });
  // it("should return 201 when user is successfully created", async () => {
  //   const response = await request(app).post("/api/v1/offers").send({
  //     advertiser_name: "Walmart",
  //     url:
  //       "https://www.walmart.com/ip/SAMSUNG-Galaxy-Watch-Bluetooth-Smart-Watch-46mm-Silver-SM-R800NZSAXAR/163601874",
  //     description:
  //       "SAMSUNG Galaxy Watch - Bluetooth Smart Watch (46mm) - Silver - SM-R800NZSAXA",
  //   });
  //   console.log(response.body);
  //   expect(response.status).toBe(201);
  // });
});
