<script>
	import { onMount } from "svelte";
	import { timeFormat } from "d3";
	import loadMenu from "$utils/loadMenu.js";
	import Menu from "$components/Menu.svelte";

	let updated;
	let error;
	let brunch = [];
	let dinner = [];
	let drinks = [];
	let items = [];
	let active;

	$: visible = !!updated;
	$: dateDisplay = visible ? timeFormat("%B %e")(new Date(updated)) : "";

	function toggle(a) {
		active = a;
		if (a === "brunch") items = brunch;
		else if (a === "dinner") items = dinner;
		else if (a === "drinks") items = drinks;
	}

	onMount(async () => {
		try {
			const { data, backup, error } = await loadMenu();
			if (data?.items) {
				updated = data.updated;
				brunch = data.items.filter((d) => d.item && d.service === "brunch");
				dinner = data.items.filter((d) => d.item && d.service === "dinner");
				drinks = data.items.filter((d) => d.item && d.service === "drinks");

				const hours = new Date().getHours();
				const isBrunch = hours < 15;
				if (isBrunch && brunch.length) toggle("brunch");
				else if (!isBrunch && dinner.length) toggle("dinner");
				else if (brunch.length) toggle("brunch");
				else if (dinner.length) toggle("dinner");
			} else {
				// TODO
				throw new Error("no data");
			}
		} catch (err) {
			error = err?.message;
		}
	});
</script>

<div class="menu" class:visible class:error={!!error}>
	{#if visible}
		<p class="alcohol"><small>alcohol-free restaurant</small></p>
		<div class="h">
			<!-- <h3>Menu</h3> -->
			<div class="buttons">
				{#if brunch.length}
					<button
						class:active={active === "brunch"}
						on:click={() => toggle("brunch")}>Brunch</button
					>
				{/if}
				{#if dinner.length}
					<button
						class:active={active === "dinner"}
						on:click={() => toggle("dinner")}>Dinner</button
					>
				{/if}
				{#if drinks.length}
					<button
						class:active={active === "drinks"}
						on:click={() => toggle("drinks")}>Drinks</button
					>
				{/if}
			</div>
			<!-- {#if dateDisplay}<time class="desktop"
					><small>updated on {dateDisplay}</small></time
				>{/if} -->
		</div>

		<img src="assets/images/keanu.png" alt="keanu eating" aria="hidden" />

		<div class="c">
			<Menu web={true} {items}></Menu>
		</div>
		{#if dateDisplay}<time><small>updated on {dateDisplay}</small></time>{/if}
	{/if}
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

	.error {
		display: none;
	}

	h3 {
		display: none;
		/* position: absolute;
		top: 50%;
		left: 0;
		transform-origin: 0 0;
		transform: rotate(-90deg) translate(-200%, -100%); */
	}

	.h {
		position: absolute;
		top: 1px;
		left: 0;
		transform: translate(0, -100%);
		display: flex;
		align-items: center;
	}

	.buttons {
		display: flex;
	}

	button {
		opacity: 0.5;
		padding: 8px 16px;
	}

	button.active {
		opacity: 1;
	}

	time {
		font-family: var(--mono);
		font-weight: 700;
		text-transform: uppercase;
		margin: 0;
		opacity: 0.65;
		text-align: center;
		width: 100%;
		display: block;
	}

	time.desktop {
		display: none;
		margin-left: 16px;
		text-align: left;
	}

	img {
		display: none;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 0;
		width: 20vw;
		max-width: 128px;
		transform: translate(-8px, -80%);
	}

	p.alcohol {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		text-align: center;
		transform: translateY(-72px);
		line-height: 0.9;
		text-transform: uppercase;
		opacity: 0.65;
		font-weight: 700;
	}

	.c {
		position: relative;
		margin: 0;
		padding: 0;
		background: var(--color-pink);
		border: var(--border) solid var(--color-fg);
	}

	@media only screen and (min-width: 640px) {
		time.mobile {
			display: none;
		}

		time.desktop {
			display: block;
		}

		img {
			display: none;
		}

		p.alcohol {
			position: absolute;
			top: -12px;
			right: 0;
			z-index: 0;
			transform: translateY(-100%);
			text-align: right;
		}
	}
</style>
