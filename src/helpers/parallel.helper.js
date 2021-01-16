class Parallel {
  constructor({ items, repository, method }) {
    this.items = items;
    this.repository = repository;
    this.method = method;
  }

  async execute() {
    return this.items;
    const response = [];

    for (const item of this.items) {
      const created = await this.repository[this.method](item);
      response.push(...created);
    }

    return response;
  }
}

module.exports = Parallel;
