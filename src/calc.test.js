const sum = require('./calc')

test("Sum method returns a correct result with valid values", () => {
    expect(sum(1, 2)).toBe(3)
})
