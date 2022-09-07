import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function swr() {
	const { data, error } = useSWR(
		"https://jsonplaceholder.typicode.com/todos",
		fetcher
	);
	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	// render data
	return (
		<div>
			<ul className="container grid gap-4 mx-auto mt-12">
				{" "}
				{data.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
				!
			</ul>
		</div>
	);
}
