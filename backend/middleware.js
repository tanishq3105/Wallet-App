const express = require("express");
const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHead = req.headers.authorization;

  if (!authHead || !authHead.startsWith("Bearer")) {
    return res.status(403);
  }

  const token = authHead.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;

    next();
  } catch (err) {
    return res.status(403).json({});
  }
};

module.exports = {
  authMiddleware,
};
