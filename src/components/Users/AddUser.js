import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const AddUserHandler = (event) => {
		event.preventDefault();
		console.log(enteredUsername, enteredAge);
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<Card className={classes.input}>
			<form onSubmit={AddUserHandler}>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" onChange={usernameChangeHandler} />
				<label htmlFor="age">Age</label>
				<input type="number" id="age" onChange={ageChangeHandler} />
				<Button type="submit"> Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
