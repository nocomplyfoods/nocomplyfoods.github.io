<script>
	import Hours from "$components/Hours.svelte";
	import Phone from "$components/Phone.svelte";
	import WebsiteMenu from "$components/WebsiteMenu.svelte";
	import Newsletter from "$components/Newsletter.svelte";
	import Events from "$components/Events.svelte";
	import Instagram from "$components/Instagram.svelte";
	import Footer from "$components/Footer.svelte";
	let message = "";
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
		<WebsiteMenu></WebsiteMenu>
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
