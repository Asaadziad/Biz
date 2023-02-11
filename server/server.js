const express = require("express");
const app = express();
const dbConnection = require("./src/services/dbService");
const userRoutes = require("./src/routes/userRoutes");
const cardRoutes = require("./src/routes/cardRoutes");

//constants
const port = process.env.SERVER_PORT || 6000;

//services
dbConnection.connect();

//routes
app.use("/api/users", userRoutes);
app.use("/api/cards", cardRoutes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
