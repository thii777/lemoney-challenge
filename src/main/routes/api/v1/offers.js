const { Router } = require("express");
const OffersController = require("../../../../presentation/controller/Offers.controller");

const routes = new Router();

routes
  .post("/offers", OffersController.store)
  .get("/offers", OffersController.list)
  .put("/offers/:id", OffersController.update)
  .delete("/offers/:id", OffersController.destroy);

module.exports = routes;
