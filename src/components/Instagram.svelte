<script>
	import ig from "$svg/instagram.svg";
</script>

<div class="c">
	<p>
		<a
			href="https://www.instagram.com/nocomplyfoods/"
			target="_blank"
			rel="noreferrer"
			><span class="icon" aria-label="Instagram">{@html ig}</span>
			<span>@nocomplyfoods</span>
		</a>
	</p>
</div>

<style>
	p {
		text-align: center;
	}

	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		border: none;
	}

	.icon {
		display: inline-block;
		margin-bottom: 1rem;
	}

	:global(.c svg) {
		width: 3rem;
		height: 3rem;
		fill: var(--color-fg);
		margin: 0 auto;
		display: block;
	}
</style>
