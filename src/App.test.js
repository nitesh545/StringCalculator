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

test("multiple numbers", () => {
	expect(sum("1, 5, 8, 9 ,1 ,2")).toBe(26);
})

test("number on next line", () => {
	expect(sum("1\n2,3")).toBe(6);
})

test("numbers with delimiter", () => {
	expect(sum("//;\n1;2")).toBe(3);
})