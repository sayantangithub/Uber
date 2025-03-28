const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controller/captain.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be atleast 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 character long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be atleast 3 characters long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be atleast 3 characters long"),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("Plate must be atleast 3 characters long"),
    body("vehicle.vehicleType")
      .isLength({ min: 1 })
      .withMessage("Plate must be atleast 3 characters long"),
  ],
  captainController.registerCaptain
);

module.exports = router;
