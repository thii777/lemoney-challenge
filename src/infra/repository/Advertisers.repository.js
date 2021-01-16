const connection = require("../database/connection");

class AdvertisersService {
  async store({ payload }) {
    return await connection("advertisers").returning("*").insert(payload);
  }
}

module.exports = new AdvertisersService();
