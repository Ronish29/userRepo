const express = require('express');
const app =  express();
const dotenv = require("dotenv");
const userRoutes = require("./routes/User");
const database = require("./config/database");
const cors = require('cors');
dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();
//middlewares
app.use(express.json());
app.use(cors());
//routes
app.use("/api", userRoutes);

//def route
app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})
