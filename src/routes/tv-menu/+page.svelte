<script>
	import { onMount } from "svelte";
	import loadMenu from "$utils/loadMenu.js";
	import Meta from "$components/Meta.svelte";
	import Menu from "$components/Menu.svelte";

	// TODO no meta hide from stuff
	let updated;
	let items = [];
	let menuComponent;

	const preloadFont = [
		"../assets/fonts/LondrinaSolid-Black.woff2",
		"../assets/fonts/LondrinaSolid-Regular.woff2",
		"../assets/fonts/LondrinaSolid-Light.woff2"
	];

	async function update(isFirstLoad) {
		try {
			const { data, error } = await loadMenu();
			// TODO
			// const hours = await loadHours();
			if (data?.items) {
				updated = data.updated;
				// convert current hours to 12 hour time
				const hours = new Date().getHours();
				const minutes = new Date().getMinutes();
				// const hours = 16;
				// brunch ends at 3pm, dinner starts at 5pm
				// show dinner from 3:30pm-12pm
				const target = 15;
				const isBrunch = hours < target || (hours === target && minutes < 30);
				// const service = isBrunch ? "brunch" : "dinner";
				const service = "dinner";
				items = data.items.filter((d) => d.name && d.service === service);
				// if nothing, use the other service
				if (!items.length) {
					items = data.items.filter((d) => d.name && d.service !== service);
				}
			} else {
				// TODO
				throw new Error("no data");
			}
		} catch (err) {
			error = err?.message;
		} finally {
			// reload the page at 9am
			const now = new Date();
			const hours = now.getHours();
			const minutes = now.getMinutes();

			// if (minutes === 0) menuComponent.egg();

			if (!isFirstLoad && (hours === 9 || hours === 16) && minutes === 0)
				window.location.reload();
			else setTimeout(update, 60000);
		}
	}
	onMount(async () => {
		await update(true);
	});
</script>

<Meta {preloadFont} hide={true}></Meta>
<Menu web={false} {items} bind:this={menuComponent}></Menu>
