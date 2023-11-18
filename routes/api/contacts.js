const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewars");

const { schemas } = require("../../models/contact");

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:id", isValidId, ctrl.deleteById);

router.put("/:id", validateBody(schemas.addSchema), isValidId, ctrl.updateById);

router.patch(
  "/:id/favorite",
  validateBody(schemas.updateFavoriteSchema),
  isValidId,
  ctrl.updateStatusContact
);

module.exports = router;
