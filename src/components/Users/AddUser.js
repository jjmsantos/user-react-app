import React from "react";

const AddUser = (props) => {
	const AddUserHandler = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={AddUserHandler}>
			<label htmlFor="username">Username</label>
			<input type="text" id="username" />
			<label htmlFor="age">Age</label>
			<input type="number" id="age" />
			<button type="submit"> Add User</button>
		</form>
	);
};

export default AddUser;
