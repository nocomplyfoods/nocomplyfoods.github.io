<script>
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import getParam from "$utils/getParam.js";
	// TODO no meta hide from stuff
	let w, h;
	let hasData;
	let mains = [];
	let sides = [];
	let sidesSamePrice = false;
	let sidePrice;
	let updated;
	let split;

	onMount(() => {
		w = window.innerWidth;
		h = window.innerHeight;
	});

	const preloadFont = [
		"assets/fonts/londrina/LondrinaSolid-Black.woff2",
		"assets/fonts/londrina/LondrinaSolid-Regular.woff2",
		"assets/fonts/sometype/SometypeMono-Bold.woff2",
		"assets/fonts/sometype/SometypeMono-Regular.woff2"
	];

	async function updateMenu() {
		try {
			const res = await fetch(
				`https://data.nocomplyfoods.com/menu.json?version=${Date.now()}`
			);
			const data = await res.json();
			const valid = data.items.filter((d) => d.price && d.item);
			hasData = valid.length > 0;
			mains = valid.filter((d) => d.section === "main");
			mains.sort((a, b) => b.price - a.price);
			sides = valid.filter((d) => d.section === "side");
			sidePrice = sides[0].price;
			sidesSamePrice = sides.every((d) => d.price === sidePrice);
			updated = data.updated;
		} catch (err) {
			console.log(err);
		} finally {
			setTimeout(updateMenu, 60000);
		}
	}

	onMount(async () => {
		split = getParam("split");
		await updateMenu();
	});
</script>

<div class="c" class:split>
	{#if hasData}
		<p class="updated">{updated}</p>
		<section class="mains">
			<div class="items">
				{#each mains as { item, detail, price }}
					<div class="item">
						<div class="text">
							<p class="name">{item}</p>
							<p class="detail">{@html detail || "&nbsp;"}</p>
						</div>
						<div class="amount">
							<p class="price">${price}</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section class="sides">
			<p class="title">Sides{sidesSamePrice ? ` $${sidePrice}` : ""}</p>
			<div class="items">
				{#each sides as { item, price }}
					<div class="item">
						<div class="text">
							<p class="name">{item}</p>
						</div>
						<div class="amount">
							<p class="price">
								{@html sidesSamePrice ? "&nbsp;" : `$${price}`}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/if}
</div>

<style>
	p {
		margin: 0;
		line-height: 1;
	}

	div.c {
		width: 100vw;
		height: 100vh;
		width: 1280px;
		height: 720px;
		background: #fff;
		display: flex;
		flex-direction: column;
	}

	div.split {
		flex-direction: row;
	}

	section {
		position: relative;
		padding: 2vw;
		flex: 1;
	}

	.items {
		position: relative;
	}

	.item {
		display: flex;
		justify-content: space-between;
	}

	section:before {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.25;
	}

	.mains:before {
		background-color: var(--color-pink);
	}

	.sides:before {
		background-color: var(--color-yellow);
	}

	.mains {
		height: 55%;
		min-height: 55%;
		max-height: 55%;
	}

	.split .mains {
		height: auto;
		min-height: none;
		max-height: none;
		width: 66.6%;
		min-width: 66.6%;
		max-width: 66.6%;
	}

	.mains .text {
		display: flex;
		align-items: baseline;
		margin-bottom: 2vw;
	}

	.split .mains .text {
		flex-direction: column;
		margin-bottom: 4vw;
	}

	.split .mains .detail {
		margin-top: 1vw;
	}

	.mains .name {
		flex: 1;
	}

	.name {
		text-transform: uppercase;
		font-weight: 700;
		font-size: 3.5vw;
		margin-right: 2vw;
	}

	.price {
		font-weight: 700;
		font-size: 3.5vw;
	}

	.detail {
		font-size: 2vw;
		opacity: 0.7;
	}

	.sides .items {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.split .sides .items {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.sides .text {
		margin-bottom: 2vw;
	}

	.sides .title {
		text-align: center;
		font-size: 3.5vw;
		font-weight: 700;
		text-transform: uppercase;
		position: relative;
		margin: 0 auto 4vw auto;
		/* transform: translateY(-50%); */
	}

	.sides .name {
		font-size: 2.5vw;
		margin: 0;
	}

	.sides .item {
		display: flex;
		align-items: baseline;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 33.33%;
	}

	.split .sides .item {
		width: 100%;
	}

	.sides .price {
		font-size: 2.5vw;
	}

	.updated {
		position: absolute;
		bottom: 0.5vw;
		right: 0.5vw;
		font-size: 1vw;
		opacity: 0.5;
		line-height: 1;
		margin: 0;
	}
</style>
