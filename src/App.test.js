let {sum} = require("./App")

test('empty string', () => {
	expect(sum('')).toBe(0);
})

test('One number', () => {
	expect(sum("100")).toBe(100);
})