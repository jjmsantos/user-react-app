import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const AddUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid Input",
				message: "Please enter a valid name and age (non-empty values).",
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: "Invalid Age",
				message: "Please enter a valid age (> 0).",
			});
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		console.log(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<Wrapper>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={AddUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor="age">Age</label>
					<input
						type="number"
						id="age"
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
					<Button type="submit"> Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
