const { Router } = require("express");
const AdvertisersController = require("../../../../presentation/controller/Advertisers.controller");

const routes = new Router();

routes.post("/advertisers", AdvertisersController.store);

module.exports = routes;
