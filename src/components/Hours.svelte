<script>
	import { MapPin } from "lucide-svelte";
</script>

<div class="hours">
	<h3>Hours</h3>
	<ul>
		<li>FRI: &nbsp;5 - 9 DINNER</li>
		<li>SAT: 11 - 3 BRUNCH</li>
		<li>SAT: &nbsp;5 - 9 DINNER</li>
		<li>SUN: 11 - 3 BRUNCH</li>
		<li>MON: &nbsp;5 - 9 DINNER</li>
	</ul>
</div>

<style>
	div {
		padding: 16px;
		margin-top: 32px;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		margin-top: 8px;
	}

	li {
		text-align: center;
	}

	h3 {
		text-align: center;
	}

	@media only screen and (min-width: 640px) {
		div {
			position: absolute;
			top: 0;
			right: 0;
			text-align: right;
			margin-top: 0;
		}

		h3 {
			text-align: right;
		}

		li {
			text-align: center;
		}
	}
</style>
