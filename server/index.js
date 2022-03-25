const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
// require("dotenv").config();
const PORT = process.env.PORT || 3001;
const mc = require("./controllers/messages_controller");

//Middleware
app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));
app.use(cors());

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

//Put endpoints here

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
