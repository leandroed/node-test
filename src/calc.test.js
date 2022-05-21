const calc = require('./calc')

test("Test sum method returns a correct result with valid values", () => {
    expect(calc.sum(1, 2)).toBe(3)
})

test("Test sub method returns a correct result with valid values", () => {
    expect(calc.sub(5, 7)).toBe(-2)
})

test("Test div method returns a correct result with valid values", () => {
    expect(calc.div(8, 2)).toBe(4)
})
