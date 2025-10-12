export default async function loadMenu(lastUpdate) {
	let data;
	let error;
	try {
		const res = await fetch(
			`https://data.nocomplyfoods.com/archive/index.json?version=${Date.now()}`
		);

		data = await res.json();

		if (!hasData) error = "no data";
	} catch (err) {
		error = err?.message;
	} finally {
		return { data, error };
	}
}
