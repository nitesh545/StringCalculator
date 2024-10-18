import logo from './logo.svg';
import './App.css';
import {Box, Button, Card, Container, TextField, Typography} from "@mui/material";
import {useState} from "react";
import InputCard from "./Components/InputCard";

export function sum(inputString) {
	inputString = inputString.trim();
	if (inputString.length < 1) {
		return 0;
	}
	let delimiter = ';';
	let delimiters = [];
	if (inputString.includes("//")) {
		let firstNextLine = inputString.indexOf('\n');
		let slc = inputString.slice(0, firstNextLine+1);
		let delimiters_string = slc.slice(2, firstNextLine);
		if(delimiters_string[0] === '[') {
			for(let i=0;i<delimiters_string.length;i++){
				if(delimiters_string[i] === '['){
					while(delimiters_string[i] !== ']'){
						delimiters.push(delimiters_string[i++]);
					}
				}
			}
		}

		delimiters = delimiters.join('');
		inputString = inputString.replace(slc, '');
	}

	inputString = inputString.replace(/[\s,]+/g, delimiter);

	inputString = inputString.split('').map((x)=> (delimiters.includes(x)) ? delimiter : x).join('');

	let numbers = inputString.split(delimiter).map((x) => parseInt(x));
	numbers = numbers.filter((x)=>x<=1000);
	let negNumbers = numbers.filter((x) => x < 0);
	let negNumbersString = negNumbers.join(', ');
	if (negNumbers.length > 0) {
		throw new Error(`negative numbers not allowed ${negNumbersString}`);
	}

	let sumOfNumbers = numbers.reduce((sumVal, number) => sumVal + number, 0);
	return sumOfNumbers;
}

function App() {
	let [stringAndSum, setStringAndSum] = useState({
		inputString: "",
		answer: 0,
	});

	return (
		<InputCard stringAndSum={stringAndSum} setStringAndSum={setStringAndSum} sum={sum}/>
	);
}

export default App;