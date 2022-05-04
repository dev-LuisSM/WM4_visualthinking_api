const Reader = require("./../utils/Reader");
const StudentService = require("../services/StudentsService");
const studentsJson = "visualpartners.json";

const students = Reader.readJsonFile(studentsJson);


class StudentController {
    static getAllStudents(){
        const getThem = StudentService.getAllStudents(students);
        return getThem;
    }

    static getEmailIfCertificated(){
        const getStudetnsWithCertification = StudentService.getEmailIfCertificated(students)
        return getStudetnsWithCertification;
    }
}


module.exports = StudentController;