class StudentService {
    static getAllStudents(students) {
        return students;
    }

    static getEmailIfCertificated(students) {
        const certificatedStudents = students.filter((student) => student.haveCertification === true);
        const getStudents = certificatedStudents.map((student) => student.email);
        return getStudents;
    }

    static getStudentsIfCredits500(students, checkCredit) {
        const credits = students.filter((student) => student.credits > checkCredit);
        const getStudents = credits.map((student) => student.name);
        return getStudents;
    }
}

module.exports = StudentService;