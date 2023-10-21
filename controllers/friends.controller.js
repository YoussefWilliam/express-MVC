const { friends } = require("../models/friends.model");

function getFriends(req, res) {
  return res.status(200).json(friends);
}

function getFriendById(req, res) {
  const id = req.params.friendId;
  const friend = friends.find((friendObj) => friendObj.id === +id);
  if (friend) {
    return res.status(200).json(friend);
  } else {
    return res.status(404).json({
      error: "Friend not found",
    });
  }
}

function createFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Name is not provided in the request body",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length + 1,
  };
  friends.push(newFriend);

  res.status(200).json(newFriend);
}

module.exports = {
  getFriends,
  getFriendById,
  createFriend,
};
