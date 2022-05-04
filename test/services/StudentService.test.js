const Reader = require('./../../lib/utils/Reader')
const StudentService = require('./../../lib/services/StudentService')
const studentsJson = 'visualpartners.json'

describe('Test Case: StudentService functions', () => {
  test('Get all the students', () => {
    const students =  Reader.readJsonFile(studentsJson)
    const getThem = StudentService.getAllStudents(students)
    expect(getThem.length).toBe(51)
  })
})
