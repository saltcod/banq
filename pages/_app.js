import "../css/index.css";
import "tailwindcss/tailwind.css";
import { createContext, useState, useMemo, useEffect } from "react";
import Layout from "../components/Layout";
import * as Papa from "papaparse";
import { server } from "../config";
import TransactionStore from "../stores/TransactionStore";
import { useRouter } from "next/router";

export const ThemeContext = createContext();

function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState("light");
	const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

	const router = useRouter();

	async function fetchData() {
		const res = await fetch(`${server}/data/may-2022.csv`);
		const data = await res.text();
		const parsedTransactions = Papa.parse(data).data;
		TransactionStore.setTransactions(parsedTransactions);
	}

	useEffect(() => {
		fetchData();
		if (router.pathname === "/") {
			TransactionStore.setSearchTerm("");
		}
	});

	return (
		<div className="site-wrapper">
			<ThemeContext.Provider value={contextValue}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeContext.Provider>
		</div>
	);
}

export default MyApp;
