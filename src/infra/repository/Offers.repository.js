const connection = require("../database/connection");

class OffersService {
  async store({ payload }) {
    return await connection("offers").returning("*").insert(payload);
  }
}

module.exports = new OffersService();
