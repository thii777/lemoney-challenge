class Parallel {
  constructor({ items, repository, method }) {
    this.items = items;
    this.repository = repository;
    this.method = method;
  }

  async execute() {
    const response = [];

    for (const item of await this.items) {
      const created = await this.repository[this.method](item);
      
      response.push(...created);
    }

    return response;
  }
}

module.exports = Parallel;
