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
			const { data, error } = await loadMenu();
			if (data?.items) {
				updated = data.updated;
				brunch = data.items.filter((d) => d.service === "brunch");
				dinner = data.items.filter((d) => d.service === "dinner");
				drinks = data.items.filter((d) => d.service === "drinks");

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
		<div class="ui">
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
		margin: 0 auto;
		width: 100%;
		opacity: 0;
		transition: opacity 0.5s;
	}

	.visible {
		opacity: 1;
	}

	.error {
		display: none;
	}

	.buttons {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	button {
		opacity: 0.5;
		padding: 0.5rem 1rem;
		border-radius: 0;
	}

	button:hover {
		opacity: 0.75;
		background: var(--color-button-bg);
	}

	button:first-of-type {
		border-top-left-radius: 0.5rem;
	}

	button:last-of-type {
		border-top-right-radius: 0.5rem;
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
		text-align: center;
		line-height: 1;
		text-transform: uppercase;
		opacity: 0.65;
		font-weight: 700;
		letter-spacing: 0;
		margin: 1rem auto;
	}

	.c {
		position: relative;
		margin: 0;
		padding: 0;
		background: var(--color-pink);
		border-radius: 1rem;
	}
</style>
