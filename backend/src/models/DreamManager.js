const AbstractManager = require("./AbstractManager");

class DreamManager extends AbstractManager {
  constructor() {
    super({ table: "dream" });
  }
}

module.exports = DreamManager;
