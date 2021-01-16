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

  async list({ query }, res) {
    const { page = 1 } = query;

    try {
      let offers = await OffersService.list({ page });

      return res.status(200).json(offers);
    } catch (error) {}
  }
}

module.exports = new OffersController();
