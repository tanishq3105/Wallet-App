const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const { default: mongoose, Collection } = require("mongoose");
const router = express.Router();
router.use(express.json())

router.get("/balance", authMiddleware, async (req, res) => {
    console.log("initiated")
  const account = await Account.findOne({
    userId: req.userId,
  });
  console.log("reached here")
  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  const { amount, to } = req.body;

  const account = await Account.findOne({ userId: req.userId }).session(
    session
  );
  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      msg: "insufficient balance",
    });
  }
  const toAccount = await Account.findOne({ userId: to }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    return res.status(404).json({
      msg: "account not found",
    });
  }

  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);

  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  await session.commitTransaction();

  res.json({
    msg: "transfer successful",
  });
});

module.exports = router;
