const { Server } = require("socket.io");

function setupSocket(server) {
    const io = new Server(server, {
        cors: {
            origin: "*", // Adjust as needed for security
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {
        // Join a room
        socket.on("joinRoom", (roomId) => {
            socket.join(roomId);
        });

        // Leave a room
        socket.on("leaveRoom", (roomId) => {
            socket.leave(roomId);
        });

        // Handle sending messages to a room
        socket.on("sendMessage", ({ roomId, message, sender }) => {
            io.to(roomId).emit("receiveMessage", { message, sender, timestamp: Date.now() });
        });

        // Handle disconnect
        socket.on("disconnect", () => {
            // Optional: handle user disconnect logic
        });
    });

    return io;
}

module.exports = setupSocket;