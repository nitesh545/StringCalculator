// let {sum} = require("./App")
import {sum} from "./App.js"

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

test("negative numbers should not be allowed", () => {
	expect(()=>sum("//;\n1;2;-4")).toThrow(`negative numbers not allowed -4`);
})

test("multiple negative numbers should not be allowed", () => {
	expect(()=>sum("//;\n1;2;-4;-5;-100;-2")).toThrow(`negative numbers not allowed -4, -5, -100, -2`);
})

test("numbers should not be greater that 1000", () => {
	expect(sum("1001, 2")).toBe(2);
})

test("numbers should be less than or equal to 1000", () => {
	expect(sum("1000, 2")).toBe(1002);
})

test("long delimiter 1", ()=>{
	expect(sum("//[****]\n1****4****5")).toBe(10);
})

test("long delimiter 2", ()=>{
	expect(sum("//[delimit]\n1delimit4delimit5")).toBe(10);
})

test("multiple delimiter", () => {
	expect(sum("//[;][%]\n2;4%4")).toBe(10);
})