<script>
	import menu from "$data/menu.csv";
</script>

<ul>
	{#each menu.filter((d) => d.item === "main") as { name, side, price }}
		<li>
			<p>
				<span class="name">{name}</span>
				<span class="side">{side}</span>
			</p>
			<p class="price">{price}</p>
		</li>
	{/each}

	<p>Sides</p>
	{#each menu.filter((d) => d.item === "side") as { name, price }}
		<li>
			<p class="name">{name}</p>
		</li>
	{/each}
</ul>

<style>
	li {
		list-style-type: none;
		display: flex;
	}
</style>
