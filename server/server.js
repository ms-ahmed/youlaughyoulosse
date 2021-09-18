const express = require("express");
const app = express(),
  session = require("./routes/session"),
  index = require("./routes/index"),
  about = require("./routes/about"),
  http = require("http"),
  socketio = require("socket.io"),
  port = process.env.PORT || 3100,
  server = http.createServer(app),
  io = socketio(server);

app.use("/api", index);
app.use("/session", session);
app.use("/about", about);
/* io.on('connection', socket => {
  socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        'message',
        formatMessage(botName, `${user.username} has joined the chat`)
      );
 */
server.listen(port, () => console.log(`Listening on port ${port}...`));
