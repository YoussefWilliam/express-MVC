const express = require("express");

const {
  getFriends,
  createFriend,
  getFriendById,
} = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.get("/", getFriends);
friendsRouter.post("/", createFriend);
friendsRouter.get("/:friendId", getFriendById);

module.exports = friendsRouter;
