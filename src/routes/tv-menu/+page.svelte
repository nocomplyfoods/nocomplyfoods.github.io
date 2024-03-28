<script>
	import { onMount } from "svelte";
	import Meta from "$components/Meta.svelte";
	import Menu from "$components/Menu.svelte";

	// TODO no meta hide from stuff

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

	onMount(async () => {
		await wakeLock();
	});
</script>

<Meta {preloadFont}></Meta>
<Menu web={false}></Menu>
