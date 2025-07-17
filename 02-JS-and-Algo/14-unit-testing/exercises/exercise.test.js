const Exercise = require('./exercise.js');

describe("test exercise class methods", () => {
    // isEven
    it("should return true if n is even, false otherwise", () => {
        const ex = new Exercise();
        expect(ex.isEven(2)).toBeTruthy();
        expect(ex.isEven(1)).toBeFalsy();
        expect(ex.isEven(0)).toBeTruthy();
        expect(ex.isEven("")).toBeTruthy();
        expect(ex.isEven(undefined)).toBeFalsy();
        expect(ex.isEven(null)).toBeTruthy();
    });

    // removeAtLeastOne
    it("should remove at least one element from the array `arr`", () => {
        const ex = new Exercise();
        expect(ex.removeAtLeastOne([1, 2, 3, 4]).length).toBeLessThan(4);
        expect(ex.removeAtLeastOne([]).length).toBe(0);
    });

    // simplify
    it("should receive an array of strings", () => {
        const ex = new Exercise();
    });
    
    it("should return a clean string without these symbols: '!', '#', '.', ',', '''", () => {
        const ex = new Exercise();
        const testStrings = [
            "Hello, world!",
            "It's a #beautiful day.",
            "No symbols here",
            "Wow!!!",
            "C# is cool.",
            "Comma, period. exclamation!",
            "Just 'single' quotes",
            "",
            "Multiple!!!###,,,'''symbols...",
            "Normal sentence"
        ];
        expect(ex.simplify("Hello, world!")).not.toContain("!");
        expect(ex.simplify("Hello, world!")).toMatch("Hello world");
        testStrings.forEach(str => {
            expect(ex.simplify(str)).not.toMatch(/[!#\.,']/);
        });
    });

    // validate
    it("should check if method receive an arr of at least one boolean", () => {
        const ex = new Exercise();
        const spy = jest.spyOn(ex, 'validate');
        ex.validate([]);
        expect(spy).toHaveBeenCalledWith(expect.any(Array))
        expect(ex.validate([])).toEqual({ error: "Need at least one boolean" });
        expect(ex.validate(["sss", "fff", 1, 2, 0, -1, undefined, null])).toEqual({ error: "Need at least one boolean" });
    });
    it("should check return true if there are more true than false and vice versa, if same true and false - return true", () => {
        const ex = new Exercise();
        expect(ex.validate([true])).toBeTruthy();
        expect(ex.validate([true, false])).toBeTruthy();
        expect(ex.validate([true, false, false])).toBeFalsy();
        expect(ex.validate([false])).toBeFalsy();
        expect(ex.validate([true, "sss", "fff", 1, 2, 0, -1, undefined, null])).toBeTruthy();
        expect(ex.validate([false, "sss", "fff", 1, 2, 0, -1, undefined, null])).toBeFalsy();
    });

})