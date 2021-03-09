import React, { useState, useEffect } from "react";
import usePersist from "../UsePersistHook";

const DeleteForm = (props) => {
	const [memo, setMemo] = usePersist("memo", []);
	const [num, setNum] = useState(0);

	const getInputValue = (event) => {
		setNum(Number(event.target.value));
	};
	const submitDeleteForm = () => {
		let res = memo.filter((item, key) => {
			return key !== num;
		});
		setMemo(res);
		setNum("");
	};

	const items = memo.map((value, key) => {
		return (
			<option value={key} key={key}>
				{value.message.substring(0, 10)}
			</option>
		);
	});
	return (
		<form onSubmit={submitDeleteForm}>
			<div className="form-group row">
				<select
					onChange={getInputValue}
					className="form-control-sm col"
					defaultValue="-1"
				>
					{items}
				</select>
				<input
					type="submit"
					value="Delete"
					className="btn btn-primary btn-sm col-2"
				/>
			</div>
		</form>
	);
};

export default DeleteForm;
