import React from 'react';
import {Box, Button, Card, Container, TextField, Typography} from "@mui/material";

export default function InputCard(props) {
	return (
		<Box sx={{backgroundColor: '#FFE7B3', width: '100vw', height: '100vh'}}>
			<Container className='App' sx={{
				display: 'flex',
				flexDirection: 'column',
				// padding: '1rem',
				width: '28vw',
				justifyContent: 'center',
				alignItems: 'center',
				alignContent: 'center',
			}}>
				<Typography variant='h2' align='center' py={10}>String Calculator - Add</Typography>
				<Card sx={{
					display: 'flex',
					flexDirection: 'column',
					// padding: '1rem',
					// mt: '5vh',
					backgroundColor: '#FFD700',
				}} elevation={10}>
					<Typography variant="h4" p={4}>Give in your input please: </Typography>
					<TextField type='text' placeholder="Please provide me your input.."
							   sx={{backgroundColor: 'white', margin: '1rem'}} onChange={(e) => {
						props.setStringAndSum({...props.stringAndSum, inputString: e.target.value.replace(/\\n/g, '\n')});
						console.log(props.stringAndSum);
					}}></TextField>
					<Button sx={{margin: '1rem'}} variant='contained' onClick={() => {
						props.setStringAndSum({
							...props.stringAndSum,
							answer: props.sum(props.stringAndSum.inputString)
						});
					}}>Calculate</Button>
					<Typography p={4} variant='h4'>Sum of numbers in string: {props.stringAndSum.answer}</Typography>
				</Card>
			</Container>
		</Box>
	);
}