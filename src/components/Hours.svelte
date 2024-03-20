<script>
	import { MapPin } from "lucide-svelte";
</script>

<div class="hours">
	<!-- <h3>Hours</h3>
	<ul>
		<li>FRI: 5pm - 10pm</li>
		<li>SAT: 5pm - 10pm</li>
		<li>SUN: 9am - 12pm</li>
	</ul> -->
	<p>
		<small>
			<a
				href="https://maps.app.goo.gl/nqZa8FxQR6jP5Ltm7"
				target="_blank"
				rel="noreferrer"
			>
				258 Stockbridge Rd<br />Great Barrington, MA</a
			>
		</small>
	</p>
</div>

<style>
	div {
		/* padding: 16px; */
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		margin-top: 8px;
	}

	p {
		margin: 0;
	}

	@media only screen and (min-width: 640px) {
		div {
			position: absolute;
			top: 16px;
			right: 16px;
			text-align: right;
		}

		h3 {
			text-align: right;
		}
	}
</style>
