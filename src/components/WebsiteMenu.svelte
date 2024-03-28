<script>
	import { timeFormat } from "d3";
	import Menu from "$components/Menu.svelte";

	let updated;

	$: visible = !!updated;
	$: dateDisplay = visible ? timeFormat("%B %d")(new Date(updated)) : "";
</script>

<div class="menu" class:visible>
	<div class="h">
		<h3>Menu</h3>
		{#if dateDisplay}<time>{dateDisplay}</time>{/if}
	</div>
	<img src="assets/images/keanu.png" alt="keanu eating" aria="hidden" />

	<div class="c">
		<Menu bind:updated web={true}></Menu>
	</div>
</div>

<style>
	.menu {
		--border: 8px;
		position: relative;
		max-width: 720px;
		min-height: 420px;
		margin: 96px auto;
		width: 90%;
		opacity: 0;
		transition: opacity 0.5s;
	}

	.visible {
		opacity: 1;
	}

	.h {
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(0, -100%);
		display: flex;
	}

	time {
		font-size: clamp(18px, 1.75vw, 32px);
		font-weight: 900;
		text-transform: uppercase;
		margin: 0;
		margin-left: 16px;
		opacity: 0.5;
	}

	img {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 0;
		width: 20vw;
		max-width: 128px;
		transform: translate(-24px, -80%);
	}

	.c {
		position: relative;
		margin: 0;
		padding: 0;
		background: var(--color-pink);
		border: var(--border) solid var(--color-fg);
	}

	@media only screen and (min-width: 640px) {
		.menu {
			margin: 128px auto;
		}
	}
</style>
