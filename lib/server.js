const StudentsController = require("./../lib/controllers/StudentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    const allStudents = StudentsController.getAllStudents();
    response.json({allStudents : allStudents});
});

app.listen(port, () => {
    console.log("Visual Thinking Api server running at http://localhost:3000/");
});