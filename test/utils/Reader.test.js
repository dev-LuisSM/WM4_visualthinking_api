const Reader = require("../../lib/utils/Reader");

describe("Test Case: Read the file", () => {
    test("Read the visualpartners.json file", () => {
        const visualpartners = Reader.readJsonFile("visualpartners.json"); 
        expect(Array.isArray(visualpartners)).toBe(true);
    });
});