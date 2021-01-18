const Parallel = require("./parallel.helper");

class ChangeState {
  disable(toDiseble, OffersRepository, offers) {
    const disable = toDiseble.map((item) => {
      delete item.advertiser_name;
      return {
        ...item,
        state: "disable",
      };
    });

    let parallelDisable;

    (async () => {
      parallelDisable = new Parallel({
        items: disable,
        repository: OffersRepository,
        method: "updateState",
      });
      await parallelDisable.execute(offers);
    })();

    return parallelDisable;
  }

  enable(toEnable, OffersRepository, offers) {
    const enable = toEnable.map((item) => {
      delete item.advertiser_name;
      return {
        ...item,
        state: "enable",
      };
    });

    let parallelEnable;

    (async () => {
      parallelEnable = new Parallel({
        items: enable,
        repository: OffersRepository,
        method: "updateState",
      });
      await parallelEnable.execute(offers);
    })();

    return parallelEnable.items;
  }
}

module.exports = new ChangeState();
