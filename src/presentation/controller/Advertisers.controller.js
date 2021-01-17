const AdvertisersService = require("../../domain/services/Advertisers.service");

class AdvertisersController {
  async store({ body: advertisers }, res) {
    try {
      const results = await AdvertisersService.store({ payload: advertisers });

      if (results.error) {
        return res.status(400).json({
          statusCode: 400,
          message: `missing data: ${results.error}`,
        });
      }

      if (results.checkAdvertiserName) {
        return res.status(400).json({
          statusCode: 400,
          message: "Advertiser already exist",
        });
      }

      return res.status(201).json(results);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ statusCode: 500, message: "Sorry, something broke" });
    }
  }
}

module.exports = new AdvertisersController();
