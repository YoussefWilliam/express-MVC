const express = require("express");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

// INIT
const app = express();

const PORT = 3000;

// Middlewares
app.use(express.json());
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

// Hosting
app.listen(PORT, () => console.log("🚀 ~ Listening on PORT:", PORT));
