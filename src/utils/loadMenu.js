// TODO test fail, no data
// TODO implement backup (could check on dates or something in archive?)
export default async function loadMenu(lastUpdate) {
	let data;
	let error;
	try {
		const res = await fetch(
			`https://data.nocomplyfoods.com/menu.json?version=${Date.now()}`
		);

		data = await res.json();
		const valid = data.items.filter((d) => d.name || (d.detail && d.section));
		const hasData = valid.length > 0;

		if (!hasData) error = "no data";
	} catch (err) {
		error = err?.message;
	} finally {
		return { data, error };
	}
}
