const Reader = require("../../lib/utils/Reader");
const StudentService = require("../../lib/services/StudentsService");
const studentsJson = "visualpartners.json";

describe("Test Case: StudentService functions", () => {
    test("Get all the students", () => {
        const students =  Reader.readJsonFile(studentsJson);
        const getThem = StudentService.getAllStudents(students);
        expect(getThem.length).toBe(51);
    });

    test("Get all the students with certification", () => {
        const students = Reader.readJsonFile(studentsJson);
        const getCert = StudentService.getEmailIfCertificated(students);
        expect(getCert.length).toBe(29);
    });

    test("Get all the students if their credits are more than 500", () => {
        const students = Reader.readJsonFile(studentsJson);
        const getStudentsWithCredit = StudentService.getStudentsIfCredits500(students, 500);
        expect(getStudentsWithCredit.length).toBe(27);
    });
});
