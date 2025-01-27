"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */
const router = require("express").Router();
const room = require("../controllers/roomController");
const idValidation = require("../middlewares/idValidation");
const permissions = require("../middlewares/permissions");
const upload = require("../middlewares/upload");
/* ------------------------------------------------------- */

router
  .route("/")
  .get(room.list)
  .post(permissions.isAdmin, upload.array("images"), room.create);
router
  .route("/:id")
  .all(idValidation)
  .get(room.read)
  .put(permissions.isAdmin, room.update)
  .patch(permissions.isAdmin, room.update)
  .delete(permissions.isAdmin, room.delete);

/* ------------------------------------------------------- */
module.exports = router;
