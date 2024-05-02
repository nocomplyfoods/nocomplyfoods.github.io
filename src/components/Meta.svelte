<script>
	export let title = "No Comply Foods";
	export let description =
		"A restaurant and small batch food company in Great Barrington, Mass";
	export let url = "https://nocomplyfoods.com";
	export let keywords = "";
	export let preloadFont = [];
	export let hide;
</script>

<svelte:head>
	<title>{title}</title>
	{#if hide}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
	<meta name="description" content={description} />
	<meta name="author" content="No Comply Foods" />
	<meta name="news_keywords" content={keywords} />

	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="No Comply Foods" />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="en_US" />

	<meta property="og:image" content="{url}/assets/social-facebook.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://nocomplyfoods.com" />
	<meta name="twitter:creator" content="@nocomplyfoods" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image:src" content="{url}/assets/social-twitter.jpg" />

	<meta name="robots" content="max-image-preview:large" />

	<link rel="canonical" href="{url}/" />

	{#each preloadFont as href}
		<link rel="preload" {href} as="font" type="font/woff2" crossorigin />
	{/each}
</svelte:head>
