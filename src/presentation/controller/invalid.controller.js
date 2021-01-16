class InvalidController {
  async handle({ method, url }, res) {
    try {
      return res.status(404).send({
        statusCode: 404,
        message: `Cannot ${method} ${url}`,
        error: "Not Found",
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ statusCode: 500, message: "Sorry, something broke" });
    }
  }
}

module.exports = new InvalidController();
