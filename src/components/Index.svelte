<script>
	import Hours from "$components/Hours.svelte";
	import WebsiteMenu from "$components/WebsiteMenu.svelte";
	import Newsletter from "$components/Newsletter.svelte";
	import Footer from "$components/Footer.svelte";
</script>

<div class="c">
	<h1>No<br />Comply<br />Foods</h1>

	<p class="location">
		<a
			href="https://maps.app.goo.gl/nqZa8FxQR6jP5Ltm7"
			target="_blank"
			rel="noreferrer"
		>
			258 Stockbridge Rd<br />Great Barrington, MA</a
		>
	</p>

	<Hours></Hours>

	<WebsiteMenu></WebsiteMenu>

	<Newsletter></Newsletter>
</div>

<Footer />

<style>
	.c {
		padding-bottom: 128px;
	}

	h1 {
		padding: 16px;
		text-align: center;
		padding-top: 32px;
	}

	p.location {
		margin: 0;
		padding: 0 16px;
		text-align: center;
	}

	@media only screen and (min-width: 640px) {
		h1 {
			text-align: left;
			padding-top: 16px;
		}

		p.location {
			text-align: left;
		}
	}
</style>
