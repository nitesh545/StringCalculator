import logo from './logo.svg';
import './App.css';
import {Box, Button, Card, Container, TextField, Typography} from "@mui/material";
import {useState} from "react";
import InputCard from "./Components/InputCard";

export function add(inputString) {
	// detect list of all provided delimiters
	function detect_delimiters(inString) {
		let outString = [];
		for(let i=0;i<inString.length;i++){
			if(inString[i] === '['){
				while(inString[i] !== ']'){
					outString.push(inString[i++]);
				}
			}
		}
		return outString.join('');
	}

	// trim and return 0 if empty string is given
	inputString = inputString.trim();
	if (inputString.length < 1) {
		return 0;
	}

	// setting up a default delimiter
	let delimiter = ';';

	// list of all delimiters
	let delimiters = [];

	// check if delimiter(s) is/are provided
	if (inputString.includes("//")) {
		let firstNextLine = inputString.indexOf('\n');
		let slc = inputString.slice(0, firstNextLine+1);

		// leave first 2 elements, and get me all elements till line break
		// so, //;\n ==> ;
		let delimiters_string = slc.slice(2, firstNextLine);
		if(delimiters_string[0] === '[') {
			delimiters = detect_delimiters(delimiters_string);
		}
		else if (delimiters_string.length === 1) {
			delimiters.push(delimiters_string[0]);
			delimiters = delimiters.join('');
		}

		//remove first line from input string as it only provides delimiter
		inputString = inputString.replace(slc, '');
	}

	// replace all whitespaces & commas with <delimiter>
	inputString = inputString.replace(/[\s,]+/g, delimiter);

	// replace inputString characters/strings with delimiter if characters/string is among provided delimiters
	inputString = inputString.split('').map((x)=> (delimiters.includes(x)) ? delimiter : x).join('');

	let numbers = inputString.split(delimiter).map((x) => parseInt(x));

	// filter out numbers less than 1001
	numbers = numbers.filter((x)=>x<=1000);

	// filter out negative numbers
	let negNumbers = numbers.filter((x) => x < 0);
	let negNumbersString = negNumbers.join(', ');
	if (negNumbers.length > 0) {
		// error is thrown with list of negative numbers
		throw new Error(`negative numbers not allowed ${negNumbersString}`);
	}

	return numbers.reduce((sumVal, number) => sumVal + number, 0);
}

function App() {
	let [stringAndSum, setStringAndSum] = useState({
		inputString: "",
		answer: 0,
	});

	return (
		<InputCard stringAndSum={stringAndSum} setStringAndSum={setStringAndSum} add={add}/>
	);
}

export default App;