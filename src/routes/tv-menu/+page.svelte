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

	async function wakeLock() {
		try {
			if ("wakeLock" in navigator) {
				await navigator.wakeLock.request("screen");
			}
		} catch (err) {
			console.log(err);
		}
	}

	async function update() {
		try {
			const { data, backup, error } = await loadMenu();
			// TODO
			// const hours = await loadHours();
			if (data?.items) {
				updated = data.updated;
				// convert current hours to 12 hour time
				const hours = new Date().getHours();
				// brunch ends at 3pm, dinner starts at 5pm
				// show dinner from 3pm-10pm
				const isBrunch = hours < 15 || hours >= 22;
				const service = isBrunch ? "brunch" : "dinner";
				items = data.items.filter((d) => d.item && d.service === service);
				// if nothing, use the other service
				if (!items.length) {
					items = data.items.filter((d) => d.item && d.service !== service);
				}
			} else {
				// TODO
				throw new Error("no data");
			}
		} catch (err) {
			error = err?.message;
		} finally {
			// setTimeout(update, 30000);
		}
	}
	onMount(async () => {
		await wakeLock();
		await update();
	});
</script>

<Meta {preloadFont}></Meta>
<Menu web={false} {items}></Menu>
