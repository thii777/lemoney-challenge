const { Router } = require("express");
const OffersController = require("../../../../presentation/controller/Offers.controller");

const routes = new Router();

routes.post("/offers", OffersController.store);
routes.get("/offers", OffersController.list);
routes.put("/offers/:id", OffersController.update);
routes.delete("/offers/:id", OffersController.destroy);

module.exports = routes;
