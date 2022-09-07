
import { observer } from "mobx-react-lite";
import Search from "../components/Search";
import TransactionTable from "../components/TransactionTable";

function Home() {


	return (
		<>
			<Search />
			<TransactionTable />
		</>
	);
}

export default observer( Home )
