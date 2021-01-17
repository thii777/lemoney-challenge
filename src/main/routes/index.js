const router = require("express").Router();

router.use("/api/v1", require("./api/v1/offers"));
router.use("/api/v1", require("./api/v1/advertisers"));
router.get("/", (req, res) => res.send({ ok: true }));

const InvalidController = require("../../presentation/controller/invalid.controller");

const methods = ["post", "get", "put", "delete"];

for (const method of methods) {
  router[method]("*", InvalidController.handle);
}

module.exports = router;