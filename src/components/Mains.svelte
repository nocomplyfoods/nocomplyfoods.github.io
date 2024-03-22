<script>
	import { max } from "d3";
	export let data;
	export let split;
	export let hasSides;

	let tuck = false;

	function update() {
		console.log(data);
		const maxItem = max(data, (d) => d.item?.length);
		const maxDetail = max(data, (d) => d.detail?.length);
		tuck = data.length <= 5;
		console.log({ maxItem, maxDetail });
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
			<div class="amount">
				<p class="price">${price}</p>
			</div>
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

	.tuck .detail {
		margin-top: calc(var(--padding) * 0.5);
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

	.name {
		text-transform: uppercase;
		font-weight: 700;
		font-size: var(--fs-big);
		margin-right: var(--padding);
	}

	.price {
		font-weight: 500;
		font-size: var(--fs-big);
		opacity: 0.7;
		text-shadow: 0.15vw 0.15vw var(--color-pink);
	}

	.detail {
		font-size: var(--fs-small);
		opacity: 0.7;
	}
</style>
