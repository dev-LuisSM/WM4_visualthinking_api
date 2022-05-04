const StudentsController = require("./../../lib/controllers/StudentsController");

describe("Test Case: StudentsController function", () => {
    test("Get all students", () => {
        const getThem = StudentsController.getAllStudents();
        expect(getThem.length).toBe(51);
    });

    test("Get all the students with certification", () => {
        const getStudetnsWithCertification = StudentsController.getEmailIfCertificated();
        expect(getStudetnsWithCertification.length).toBe(29);
    });

    test("Get all the students if their credits are more than 500", () => {
        const getStudentsIfCredits500 = StudentsController.getStudentsIfCredits500();
        expect(getStudentsIfCredits500.length).toBe(27);
    });
});