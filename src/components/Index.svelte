<script>
	import { onMount } from "svelte";
	import Hours from "$components/Hours.svelte";
	import Phone from "$components/Phone.svelte";
	import WebsiteMenu from "$components/WebsiteMenu.svelte";
	import Newsletter from "$components/Newsletter.svelte";
	import Events from "$components/Events.svelte";
	import Instagram from "$components/Instagram.svelte";
	import Footer from "$components/Footer.svelte";
	import loadMenu from "$utils/loadMenu.js";

	let err = "";
	let message = "";
	let updated = "";
	let brunch = [];
	let dinner = [];
	let drinks = [];

	onMount(async () => {
		try {
			const { data, error } = await loadMenu();
			console.log(data);
			if (error) {
				console.log(error);
				err = true;
			} else {
				if (data?.items) {
					updated = data.updated;
					brunch = data.items.filter((d) => d.service === "brunch");
					dinner = data.items.filter((d) => d.service === "dinner");
					drinks = data.items.filter((d) => d.service === "drinks");
				} else {
					err = true;
				}
			}
			if (data && data.custom)
				message = data.custom?.find((d) => d.key === "message")?.value || "";
		} catch (error) {
			console.log(error?.message);
			err = true;
		}
	});
</script>

<div class="c" class:has-message={!!message}>
	{#if message}<p class="message">{@html message}</p>{/if}
	<h1>No<br />Comply<br />Foods</h1>

	<section id="location">
		<p>
			<a
				href="https://maps.app.goo.gl/nqZa8FxQR6jP5Ltm7"
				target="_blank"
				rel="noreferrer"
			>
				258 Stockbridge Rd<br />Great Barrington, MA</a
			>
		</p>
	</section>

	<section id="hours">
		<Hours></Hours>
	</section>

	<section id="menu">
		<WebsiteMenu {updated} {err} {brunch} {dinner} {drinks}></WebsiteMenu>
	</section>

	<section id="newsletter">
		<Newsletter></Newsletter>
	</section>

	<section id="events">
		<Events></Events>
	</section>

	<section id="phone">
		<Phone></Phone>
	</section>

	<section id="instagram">
		<Instagram></Instagram>
	</section>
</div>

<Footer />

<style>
	.c {
		padding: 2rem 1rem;
	}

	.c.has-message {
		padding-top: 4rem;
	}

	p.message {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		padding: 1rem;
		margin: 0;
		text-align: center;
		font-size: 1rem;
		background-color: var(--color-fg);
		color: var(--color-bg);
		z-index: var(--z-top);
	}

	#location {
		margin-top: 2rem;
	}

	#location p {
		margin: 0;
		text-align: center;
	}

	section {
		width: 100%;
		margin: 4rem auto;
	}
</style>
