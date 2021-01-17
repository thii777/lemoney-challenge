const connection = require("../database/connection");

class AdvertisersService {
  async store({ payload }) {
    return await connection("advertisers").returning("*").insert(payload);
  }

  async get({ advertiser_name }) {
    return await connection("advertisers")
      .where({ advertiser_name })
      .select("*");
  }
}

module.exports = new AdvertisersService();
