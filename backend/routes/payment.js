const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/", async (req, res) => {
  const { products, user, cargoFee } = req.body;

  res.status(201).send({
    ok:true
  })
});

module.exports = router;
