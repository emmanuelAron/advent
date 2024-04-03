const filterLines = require('../day2_part1');

describe('filterLines function', () => {
    it('should compute the sum without the red having 12+, without the green having 13+, and without the blue having 14+', async () => {
        try {
            let sum = await filterLines();
            expect(sum).toEqual(1931);
        } catch (error) {
            fail(error);
        }
    });
});
