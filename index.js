const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3005;
const db = require("./queries");
const validateItem = require("./validations/validateItem");

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.get("/api/todo", db.getItems);
app.get("/api/todo/:id", db.getItem);

// app.post("/api/todo", validateItem, db.createItem);

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
