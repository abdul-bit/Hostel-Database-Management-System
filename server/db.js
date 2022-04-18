const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "abdul248",
    host: "localhost",
    port: 5432,
    database: "hostel"


})

module.exports = pool;