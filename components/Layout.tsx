import Head from "next/head";
import { Footer } from "./Footer";
import TransactionStore from '../stores/TransactionStore';
import { observer } from "mobx-react-lite";
import classNames from 'classnames';
import { FC } from 'react'
import Link from 'next/link'
// const store = new TransactionStore();

const Layout: FC = ( { children } ) => {
	return (
		<>
			<Head>
				<title>Banq | Banking for devs</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container flex gap-12 mx-auto mt-12 font-serif">
				<aside>
					<p className="text-lg font-bold">
						<Link href="/">
							<a>
								Banq
							</a>
						</Link></p>

				</aside>
				<div className="w-full">{children}</div>
			</main>
			<Footer />
		</>
	);
}

export default observer( Layout );
