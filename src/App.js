import logo from './logo.svg';
import './App.css';
import {Box, Button, Card, Container, TextField, Typography} from "@mui/material";
import {useState} from "react";
import InputCard from "./Components/InputCard";

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
