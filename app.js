const mysql = require('mysql');

const db_connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "users",
    password: "162534"
})

db_connection.connect(err => {
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log("Database is connected!");
    }
})

let query = "SELECT * FROM users";

db_connection.query(query, (err, result, fields) => {
    if (err) console.log(err);
    else {
        result.forEach(item => {
            console.log("Name, surname:\t", item['firstName'], item['lastName']);
            console.log("Email:\t\t", item['email']);
        })
    }
});


db_connection.end(err => {
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log("Database is disconnected!");
    }
});