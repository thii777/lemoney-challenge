const OffersService = require("../../domain/services/Offers.service");

class OffersController {
  async store({ body: offers }, res) {

    const results = await OffersService.store({ payload: offers });

    if (results.error) {
      return res.status(400).json({
        statusCode: 400,
        message: `missing data: ${results.error}`,
      });
    }

    return res.status(201).json(results);
  }
}

module.exports = new OffersController();
