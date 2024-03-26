<script>
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import Index from "$components/Index.svelte";
	import copy from "$data/copy.json";

	export let data;

	const preloadFont = [
		"assets/fonts/LondrinaSolid-Black.woff2",
		"assets/fonts/SometypeMono-Medium.woff2",
		"assets/fonts/SometypeMono-Bold.woff2"
	];

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);
	setContext("data", data.data);
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />
<Index />
