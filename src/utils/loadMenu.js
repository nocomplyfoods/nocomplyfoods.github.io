// import testMenu from "$data/menu.csv";
import storage from "$utils/localStorage.js";

export default async function loadMenu(lastUpdate) {
	let data;
	let backup;
	let error;
	try {
		// TODO test a fail
		// TODO test no data
		const res = await fetch(
			`https://data.nocomplyfoods.com/menu.json?version=${Date.now()}`
		);

		data = await res.json();
		// data = { updated: "test", items: testMenu };

		const valid = data.items.filter((d) => d.item || (d.detail && d.section));

		const hasData = valid.length > 0;

		if (hasData) {
			if (lastUpdate !== data.updated) storage.set("nocomply_menu", data);
		} else throw new Error("no data");
	} catch (err) {
		console.log(err?.message);
		error = err?.message;
		data = storage.get("nocomply_menu");
		backup = true;
	} finally {
		return { data, backup, error };
	}
}
