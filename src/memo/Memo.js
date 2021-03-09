import React, { useState, useEffect } from "react";
import usePersist from "../UsePersistHook";
import Item from "./Item";

function Memo() {
	const [memo, setMemo] = usePersist("memo", []);
	const [findMemo, setFindMemo] = usePersist("findMemo", []);
	const [mode, setMode] = usePersist("mode", "default");
	let data = [];
	switch (mode) {
		case "default":
			data = memo.map((value, key) => (
				<Item key={value.message} value={value} index={key + 1} />
			));
			break;
		case "find":
			data = findMemo.map((value, key) => (
				<Item key={value.message} value={value} index={key + 1} />
			));
			break;
		default:
			data = memo.map((value, key) => (
				<Item key={value.message} value={value} index={key + 1} />
			));
			break;
	}
	return (
		<table className="table mt-4">
			<tbody>{data}</tbody>
		</table>
	);
}

export default Memo;
