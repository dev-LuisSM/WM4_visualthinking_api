class StudentService {
    static getAllStudents(students) {
        return students;
    }

    static getEmail(students) {
        const certificatedStudents = students.filter((student) => student.haveCertification === true);
        const getStudents = certificatedStudents.map((student) => student.email);
        return getStudents;
    }
}

module.exports = StudentService;