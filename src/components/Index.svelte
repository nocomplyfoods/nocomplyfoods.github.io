<script>
	import Hours from "$components/Hours.svelte";
	import Phone from "$components/Phone.svelte";
	import WebsiteMenu from "$components/WebsiteMenu.svelte";
	import Newsletter from "$components/Newsletter.svelte";
	import Events from "$components/Events.svelte";
	import Instagram from "$components/Instagram.svelte";
	import Footer from "$components/Footer.svelte";
	// import ig from "$svg/instagram.svg";
</script>

<div class="c">
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
