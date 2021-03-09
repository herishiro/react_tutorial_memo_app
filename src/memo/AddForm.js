import React, { useState } from "react";
import usePersist from "../UsePersistHook";

const AddForm = (props) => {
	const [memo, setMemo] = usePersist("memo", []);
	const [message, setMessage] = useState("");

	const getInputValue = (event) => {
		setMessage(event.target.value);
	};
	const submitAddForm = () => {
		const data = {
			message,
			created: new Date(),
		};
		memo.unshift(data);
		setMemo(memo);
		setMessage("");
	};

	return (
		<form onSubmit={submitAddForm}>
			<div className="form-group row">
				<input
					type="text"
					className="form-control-sm col"
					onChange={getInputValue}
					value={message}
					required
				/>
				<input
					type="submit"
					value="Add"
					className="btn btn-primary btn-sm col-2"
				/>
			</div>
		</form>
	);
};

export default AddForm;
