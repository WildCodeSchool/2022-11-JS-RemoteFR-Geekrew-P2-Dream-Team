const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const dreamControllers = require("./controllers/dreamControllers");
const commandeControllers = require("./controllers/commandeControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/dreams", dreamControllers.browse);
router.get("/dreams/:id", dreamControllers.read);
router.put("/dreams/:id", dreamControllers.edit);
router.post("/dreams", dreamControllers.add);
router.delete("/dreams/:id", dreamControllers.destroy);

router.post("/commandes", commandeControllers.add);
router.delete("/commandes/:id", commandeControllers.destroy);

module.exports = router;
