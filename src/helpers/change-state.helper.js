const Parallel = require("./parallel.helper");

class ChangeState {
  disable(toDiseble, OffersRepository, offers) {
    const disable = toDiseble.map((item) => ({
      id: item.id,
      premium: item.premium,
      state: "disable",
      starts_at: item.starts_at,
      ends_at: item.ends_at,
      description: item.description,
      url: item.url,
    }));

    let parallelDisable;

    (async () => {
      parallelDisable = new Parallel({
        items: disable,
        repository: OffersRepository,
        method: "update",
      });
      await parallelDisable.execute(offers);
    })();

    return parallelDisable;
  }

  enable(toEnable, OffersRepository, offers) {
    const enable = toEnable.map((item) => ({
      id: item.id,
      premium: item.premium,
      state: "enable",
      starts_at: item.starts_at,
      ends_at: item.ends_at,
      description: item.description,
      url: item.url,
    }));

    let parallelEnable;

    (async () => {
      parallelEnable = new Parallel({
        items: enable,
        repository: OffersRepository,
        method: "update",
      });
      await parallelEnable.execute(offers);
    })();

    return parallelEnable.items;
  }
}

module.exports = new ChangeState();
