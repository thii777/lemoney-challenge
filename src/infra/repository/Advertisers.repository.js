const connection = require("../database/connection");

class AdvertisersService {
  async store({ payload }) {
    return await connection("advertisers").returning("*").insert(payload);
  }

  async getByName({ advertiser_name }) {
    return await connection("advertisers")
      .where({ advertiser_name })
      .select("*");
  }

  async getById({ advertiser_id }) {
    return await connection("advertisers")
      .where({ id: advertiser_id })
      .select("*");
  }
}

module.exports = new AdvertisersService();
