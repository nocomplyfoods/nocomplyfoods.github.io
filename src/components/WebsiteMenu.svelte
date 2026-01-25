<script>
	import { timeFormat } from "d3";
	import loadMenu from "$utils/loadMenu.js";
	import Menu from "$components/Menu.svelte";

	export let updated;
	export let err;
	export let brunch = [];
	export let dinner = [];
	export let drinks = [];
	export let items = [];
	export let active;

	$: visible = !!updated;
	$: dateDisplay = visible ? timeFormat("%B %e")(new Date(updated)) : "";
	$: message = err
		? "menu unavailable. please check back later."
		: "loading menu...";

	function toggle(a) {
		active = a;
		if (a === "brunch") items = brunch;
		else if (a === "dinner") items = dinner;
		else if (a === "drinks") items = drinks;
	}

	$: {
		const hours = new Date().getHours();
		const isBrunch = hours < 15;
		if (isBrunch && brunch.length) toggle("brunch");
		else if (!isBrunch && dinner.length) toggle("dinner");
		else if (brunch.length) toggle("brunch");
		else if (dinner.length) toggle("dinner");
	}
</script>

<div class="c">
	{#if !visible}
		<p class="msg"><small>{message}</small></p>
	{/if}
	<div class="menu" class:visible class:err>
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

		<div class="wrapper">
			<Menu web={true} {items}></Menu>
		</div>
		{#if dateDisplay}<p><small>updated on {dateDisplay}</small></p>{/if}
	</div>
</div>

<style>
	.menu {
		--border: 8px;
		position: relative;
		max-width: 640px;
		min-height: 320px;
		margin: 0 auto;
		width: 100%;
		opacity: 0;
		transition: opacity 0.5s;
	}

	.visible {
		opacity: 1;
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

	p {
		font-family: var(--mono);
		font-weight: 700;
		text-transform: uppercase;
		margin: 0.5rem auto;
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

	.wrapper {
		position: relative;
		margin: 0;
		padding: 0;
		background: var(--color-pink);
		border-radius: 1rem;
	}
</style>
