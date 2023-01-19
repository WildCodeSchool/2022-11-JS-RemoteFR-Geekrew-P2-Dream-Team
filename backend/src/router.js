const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const dreamController = require("./controllers/dreamController");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/dreams", dreamController.browse);
router.get("/dreams/:id", dreamController.read);

module.exports = router;
