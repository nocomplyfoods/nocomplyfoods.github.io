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
		"../assets/fonts/SometypeMono-Medium.woff2",
		"../assets/fonts/SometypeMono-Bold.woff2"
	];

	async function update(isFirstLoad) {
		try {
			const { data, error } = await loadMenu();

			if (data?.items) {
				updated = data.updated;

				const service = "drinks";
				items = data.items.filter((d) => d.name && d.service === service);

				const now = new Date();
				const hours = now.getHours();
				const minutes = now.getMinutes();

				// if (minutes === 0) menuComponent.egg();

				if (!isFirstLoad && (hours === 10 || hours === 16) && minutes === 0)
					window.location.reload();
				else setTimeout(update, 30000);
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
<Menu web={false} {items} drinks={true} bind:this={menuComponent}></Menu>
