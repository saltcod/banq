import {
	action,
	autorun,
	makeObservable,
	observable,
	computed,
	runInAction,
	toJS,
} from "mobx";

class TransactionStore {
	active = [];
	transactions = [];
	loading = false;
	searchTerm = "";

	constructor() {
		makeObservable(this, {
			active: observable,
			searchTerm: observable,
			loading: observable,
			transactions: observable,
			setSearchTerm: action,
			setTransactions: action,
			filteredTransactions: computed,
			filteredTransactionsSubTotal: computed,
		});
	}

	get totalActive() {
		return this.active.length;
	}

	get filteredTransactions() {
		return this.transactions.filter((item) => {
			const JSifiedItem = toJS(item);
			const name = JSifiedItem[1];
			if (name) {
				return name.toLowerCase().includes(this.searchTerm.toLowerCase());
			}
		});
	}

	get filteredTransactionsSubTotal() {
		const amounts = this.filteredTransactions.map((item) => Number(item[2]));
		var sum = amounts.reduce((a, b) => a + b, 0);

		return sum;
	}

	setTransactions(transactions) {
		this.transactions = transactions;
	}

	setSearchTerm(value) {
		this.searchTerm = value;
	}

	clearSearchTerm() {
		this.searchTerm = "";
	}
}

export default new TransactionStore();
