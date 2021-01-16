const { Router } = require("express");
const OffersController = require("../../../../presentation/controller/Offers.controller");

const routes = new Router();

routes.post("/offers", OffersController.store);
routes.get("/offers", OffersController.list);

module.exports = routes;
