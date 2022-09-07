import PetList from "../components/PetList";
import PetOwnerStore from "../stores/PetStore";

export default function petstore() {
	const store = new PetOwnerStore();

	return (
		<div className="container mx-auto mt-12">
			<PetList store={store} />
		</div>
	);
}
