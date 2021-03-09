import usePersist from "../UsePersistHook";
import Memo from "./Memo";
import AddForm from "./AddForm";
import DeleteForm from "./DeleteForm";
import FindForm from "./FindForm";

export default function MemoPage() {
	const [mode] = usePersist("mode", "default");
	return (
		<div>
			<h5 className="my-3">mode: {mode}</h5>
			<div className="alert alert-primary pb-0">
				<AddForm />
				<DeleteForm />
				<FindForm />
			</div>
			<Memo />
		</div>
	);
}
