const AbstractManager = require("./AbstractManager");

class CommandeManager extends AbstractManager {
  constructor() {
    super({ table: "commande" });
  }
}

module.exports = CommandeManager;
