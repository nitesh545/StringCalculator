import logo from './logo.svg';
import './App.css';
import {Box, Button, Card, Container, TextField, Typography} from "@mui/material";
import {useState} from "react";
import InputCard from "./Components/InputCard";

function sum(inputString) {
	if(inputString.length < 1){
		return 0;
	}
	let delimiter = ';';
	if(inputString.includes("//")){
		delimiter = inputString[2];
		inputString = inputString.replace(`//${delimiter}\n`, '');
	}
	inputString = inputString.replace(/[\s,]+/g, delimiter);
	let numbers = inputString.split(delimiter).map((x)=>parseInt(x));
	let sumOfNumbers = numbers.reduce((sumVal, number) => sumVal + number, 0);
	return sumOfNumbers;
}

function App() {
	let [stringAndSum, setStringAndSum] = useState({
		inputString: "",
		answer: 0,
	});

	return (
		<InputCard stringAndSum={stringAndSum} setStringAndSum={setStringAndSum} />
	);
}

export default App;
module.exports = {sum};