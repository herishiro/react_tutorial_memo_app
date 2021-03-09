import React, { useState, useEffect } from "react";
import usePersist from "../UsePersistHook";

const FindForm = (props) => {
	const [memo, setMemo] = usePersist("memo", []);
	const [findMemo, setFindMemo] = usePersist("findMemo", []);
	const [message, setMessage] = useState("");
	const [mode, setMode] = usePersist("mode", "default");

	const getInputValue = (event) => {
		setMessage(event.target.value);
	};
	const submitFindForm = () => {
		if (message === "") {
			setMode("default");
			return;
		}
		const res = memo.filter((item) => {
			return item.message.includes(message);
		});
		setFindMemo(res);
		setMode("find");
		setMessage("");
	};

	return (
		<form onSubmit={submitFindForm}>
			<div className="form-group row">
				<input
					type="text"
					className="form-control-sm col"
					onChange={getInputValue}
					value={message}
				/>
				<input
					type="submit"
					value="Find"
					className="btn btn-primary btn-sm col-2"
				/>
			</div>
		</form>
	);
};

export default FindForm;
