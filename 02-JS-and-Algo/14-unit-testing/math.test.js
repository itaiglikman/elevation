const { add, mul } = require('./math');

describe('Math functions', () => {
    it('should add two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
    // it('should multiply two numbers', () => {
    //     expect(mul(2, 3)).toBe(6);
    // });
    it('should multiply in async', (done) => {
        setTimeout(() => {
            expect(mul(2, 5)).toBe(10);
            done();
        }, 2000)
    });
});
