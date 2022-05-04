const StudentsController = require("./../../lib/controllers/StudentsController");

describe("Test Case: StudentsController function", () => {
    test("Get all students", () => {
        const getThem = StudentsController.getAllStudents();
        expect(getThem.length).toBe(51);
    });
});