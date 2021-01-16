const OffersService = require("../../domain/services/Offers.service");

class OffersController {
  async store({ body: offers }, res) {
    try {
      const results = await OffersService.store({ payload: offers });

      if (results.error) {
        return res.status(400).json({
          statusCode: 400,
          message: `missing data: ${results.error}`,
        });
      }

      return res.status(201).json(results);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ statusCode: 500, message: "Sorry, something broke" });
    }
  }

  async list({ query }, res) {
    const { page = 1 } = query;

    try {
      let offers = await OffersService.list({ page });

      return res.status(200).json(offers);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ statusCode: 500, message: "Sorry, something broke" });
    }
  }

  async update({ body: offers, params }, res) {
    try {
      offers = await OffersService.update({ payload: offers, id: params.id });

      return res.status(200).json(offers);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ statusCode: 500, message: "Sorry, something broke" });
    }
  }
}

module.exports = new OffersController();
