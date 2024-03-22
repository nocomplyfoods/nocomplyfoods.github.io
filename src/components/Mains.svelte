<script>
	import { max } from "d3";
	export let data;
	export let split;
	export let hasSides;

	let tuck = false;

	function update() {
		const maxItem = max(data, (d) => d.item?.length);
		const maxDetail = max(data, (d) => d.detail?.length);
		// tuck = data.length <= 5;
	}

	$: update(data);
</script>

<div class="items" class:split class:tuck>
	{#each data as { item, detail, price }}
		<div class="item">
			<div class="text">
				<p class="name">
					{item}
				</p>
				<p class="detail">{@html detail || "&nbsp;"}</p>
			</div>
			{#if price}
				<div class="amount">
					<p class="price">${price}</p>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	p {
		margin: 0;
		line-height: 1;
	}

	.text {
		display: flex;
		align-items: baseline;
		margin-bottom: calc(var(--padding) * 1);
	}

	.split .text {
		flex-direction: column;
		margin-bottom: calc(var(--padding) * 1.5);
	}

	.tuck .text {
		flex-direction: column;
	}

	.tuck .text {
		align-items: center;
	}

	.tuck .detail {
		margin-top: calc(var(--padding) * 0.5);
		text-align: center;
	}

	.split .detail {
		margin-top: calc(var(--padding) * 0.5);
	}

	.name {
		flex: 1;
		text-shadow: 0.15vw 0.15vw var(--color-pink);
	}

	.items {
		position: relative;
	}

	.item {
		display: flex;
		justify-content: space-between;
	}

	.tuck .item {
		justify-content: center;
	}

	.name {
		text-transform: uppercase;
		font-weight: 700;
		font-size: var(--fs-big);
		margin-right: var(--padding);
	}

	.price {
		font-weight: 500;
		font-size: var(--fs-big);
		text-shadow: 0.15vw 0.15vw var(--color-pink);
		opacity: 0.7;
		/* background: var(--color-yellow); */
		/* background: var(--color-pink); */
		/* outline: 0.3vw solid var(--color-pink); */
		/* padding: 0.3vw; */
		/* border-bottom: 0.5vw solid var(--color-pink); */
	}

	.detail {
		font-size: var(--fs-small);
		opacity: 0.7;
	}
</style>
