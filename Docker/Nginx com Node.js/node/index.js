import express from "express";
import mysql from "mysql";

const config = {
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'nodedb',
    isSecureContext: false
};

const insertPerson = (name, connection) => {
    const sql = `INSERT INTO people(name) values('${name}')`;
    connection.query(sql);
}

const getPeople = (response, connection) => {
    const sql = `SELECT id, name FROM people`;

    connection.query(sql, (error, results, fields) => {
        if (error) throw error;

        let list = "";
        results.forEach(person => {
            console.log(person.id);
            list += `<li>${person.id} - ${person.name}</li>`
        });

        response.send(`<h1>Full Cycle Rocks!</h1><br/><ul>${list}</ul>`);
    });
}

const app = express();

app.get("/", async (request, response) => {

    const connection = mysql.createConnection(config);

    insertPerson("Iramar Falcão", connection);
    insertPerson("Sueleny Feitosa", connection);

    getPeople(response, connection);

    connection.end();
});

app.listen(3000, () => {
    console.log("Server runnig!");
});
