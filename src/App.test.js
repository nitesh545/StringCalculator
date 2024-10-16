let {sum} = require("./App")

test('empty string', () => {
	expect(sum('')).toBe(0);
})

test('One number', () => {
	expect(sum("1")).toBe(1);
})

test("two numbers", () => {
	expect(sum("1, 5")).toBe(6);
})