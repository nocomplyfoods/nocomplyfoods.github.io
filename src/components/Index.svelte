<script>
	import { range } from "d3";
	import { getContext } from "svelte";
	import Hours from "$components/Hours.svelte";
	import Menu from "$components/Menu.svelte";
	import Footer from "$components/Footer.svelte";

	const items = range(15 * 3);
	const copy = getContext("copy");
	const data = getContext("data");
</script>

<h1>No<br />Comply<br />Foods</h1>

<Hours></Hours>

<div class="coming">
	<img
		src="assets/images/burger.png"
		alt="skateboarding burger"
		aria="hidden"
	/>
	<h2>Coming very soon...</h2>
</div>

<Footer />

<style>
	h1 {
		padding: 16px;
		/* text-align: center; */
	}

	.coming {
		padding: 16px;
		margin-top: 16px;
		text-align: center;
		overflow: hidden;
		pointer-events: none;
	}

	img {
		display: block;
		width: 65%;
		max-width: 320px;
		margin: 0 auto;
		transform-origin: 20% 80%;
		animation: slideAndRotate 1s ease-out forwards;
	}

	@media only screen and (min-width: 640px) {
		.coming {
			position: fixed;
			top: 50%;
			left: 50%;
			margin: 0;
			transform: translate(-50%, -50%);
			text-align: center;
			width: 100%;
		}

		img {
			animation: slideAndRotate 2s ease-out forwards;
		}
	}

	@keyframes slideAndRotate {
		0% {
			transform: translateX(-80vw) rotate(-10deg);
		}
		95% {
			transform: translateX(0) rotate(-10deg);
		}
		100% {
			transform: translateX(0) rotate(0deg);
		}
	}
</style>
