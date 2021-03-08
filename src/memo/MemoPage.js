import usePersist from "../UsePersistHook";

export default function MemoPage() {
	const [mode, setMode] = usePersist("mode", "default");
	return (
		<div>
			<h5 className="my-3">mode: {mode}</h5>
			<div className="alert alert-primary pb-0"></div>
		</div>
	);
}
