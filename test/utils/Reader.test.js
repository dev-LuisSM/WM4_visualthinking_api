const Reader = require("../../lib/utils/Reader");

describe("Test Case: Read the file", () => {
    test("Read the visualpartners.json file", () => {
        const visualpartners = Reader.readJsonFile("visualpartners.json"); 
        console.log(visualpartners); 
        // expect(Array.isArray(visualpartners)).toBe(true);
        expect(1).toBe(10)
    });
});