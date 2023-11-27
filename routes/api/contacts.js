const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

router.delete("/:id", authenticate, isValidId, ctrl.deleteById);

router.put(
  "/:id",
  authenticate,
  validateBody(schemas.addSchema),
  isValidId,
  ctrl.updateById
);

router.patch(
  "/:id/favorite",
  validateBody(schemas.updateFavoriteSchema),
  isValidId,
  ctrl.updateStatusContact
);

module.exports = router;
