<script>
	import { onMount } from "svelte";
	import loadMenu from "$utils/loadMenu.js";
	import Meta from "$components/Meta.svelte";
	import Menu from "$components/Menu.svelte";

	// TODO no meta hide from stuff
	let updated;
	let items = [];

	const preloadFont = [
		"../assets/fonts/LondrinaSolid-Black.woff2",
		"../assets/fonts/SometypeMono-Medium.woff2",
		"../assets/fonts/SometypeMono-Bold.woff2"
	];

	async function update(isFirstLoad) {
		try {
			const { data, backup, error } = await loadMenu();
			// TODO
			// const hours = await loadHours();
			if (data?.items) {
				updated = data.updated;
				// convert current hours to 12 hour time
				const hours = new Date().getHours();
				const minutes = new Date().getMinutes();

				const service = "drinks";
				items = data.items.filter((d) => d.name && d.service === service);
			} else {
				// TODO
				throw new Error("no data");
			}
		} catch (err) {
			error = err?.message;
		} finally {
			setTimeout(update, 30000);
		}
	}
	onMount(async () => {
		await update(true);
	});
</script>

<Meta {preloadFont} hide={true}></Meta>
<Menu web={false} {items} drinks={true}></Menu>
