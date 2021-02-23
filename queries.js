const Pool = require("pg").Pool;

const pool = new Pool({
	user: "krishna",
	host: "localhost",
	database: "todoapp",
	password: "123456",
	port: 5432
});

const getItems = (request, response) => {
	pool.query("SELECT * FROM items ORDER BY id ASC", (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const getItem = (request, response) => {
	pool.query(
		`SELECT * FROM items where id=${request.params.id}`,
		(error, results) => {
			if (error) {
				throw error;
			}
			response.status(200).json(results.rows);
		}
	);
};

const createItem = (request, response) => {
	pool.query(
		`SELECT * FROM items where id=${request.params.id}`,
		(error, results) => {
			if (error) {
				throw error;
			}
			response.status(200).json(results.rows);
		}
	);
};

module.exports = {
	getItems,
	getItem,
	createItem
};
