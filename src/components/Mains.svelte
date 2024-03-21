<script>
	export let mains;
	export let split;
</script>

<div class="items" class:split>
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

	.split .detail {
		margin-top: 1vw;
	}

	.name {
		flex: 1;
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
	}

	.detail {
		font-size: var(--fs-small);
		opacity: 0.7;
	}
</style>
