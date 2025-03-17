<script>
	import { onMount } from "svelte";
	import loadMenu from "$utils/loadMenu.js";
	import Meta from "$components/Meta.svelte";
	import Menu from "$components/Menu.svelte";

	// TODO no meta hide from stuff
	let updated;
	let items = [];
	let force;
	let service;

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
				// brunch ends at 3pm, dinner starts at 5pm
				// show dinner from 3:30pm-12pm
				const target = 15;
				const isBrunch = hours < target || (hours === target && minutes < 30);
				if (!force) service = isBrunch ? "brunch" : "dinner";
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
			// reload the page at 10am
			const now = new Date();
			const hours = now.getHours();
			const minutes = now.getMinutes();
			if (!isFirstLoad && (hours === 10 || hours === 16) && minutes === 0)
				window.location.reload();
			else setTimeout(update, 30000);
		}
	}

	async function onToggle() {
		force = true;
		service = service === "brunch" ? "dinner" : "brunch";
		await update();
	}

	onMount(async () => {
		await update(true);
	});
</script>

<Meta {preloadFont} hide={true}></Meta>
<Menu web={false} {items}></Menu>

<button on:click={onToggle}>toggle</button>

<style>
	button {
		position: fixed;
		top: 0;
		right: 0;
		opacity: 0;
	}
</style>
