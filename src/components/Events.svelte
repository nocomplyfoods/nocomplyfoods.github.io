<script>
	import { descending } from "d3";
	import { onMount } from "svelte";
	import { ExternalLink } from "lucide-svelte";

	let events = [];
	let visible;

	onMount(async () => {
		try {
			const baseURL =
				"https://r8gkc5c9.apicdn.sanity.io/v2024-04-01/data/query/production?";
			const query = '*[_type == "event"]';
			const encodedQuery = encodeURIComponent(query);
			const url = `${baseURL}query=${encodedQuery}`;
			const response = await fetch(url);
			const data = await response.json();
			events = data.result.map((d) => {
				const link = d.link?.trim();
				const when = d.when?.trim();
				const what = d.what?.trim();
				const where = d.where?.trim();
				const img = d.image.asset._ref
					.replace("image-", "")
					.replace("-png", ".png")
					.replace("-jpg", ".jpg");
				const image = `https://apicdn.sanity.io/images/r8gkc5c9/production/${img}`;
				return {
					what,
					where,
					when,
					link,
					image
				};
			});

			// events.sort((a, b) => descending(a.date, b.date));
			visible = events.length > 0;
		} catch (err) {
			// TODO
			console.log(err);
		}
	});
</script>

<div class="c" class:visible>
	<h2>Events</h2>
	<ul>
		{#each events as { what, where, when, link, image }}
			<li>
				<div class="img-container"><img src={image} alt={what} /></div>

				<div class="info">
					<div>
						<h3>What</h3>
						<p>{what}</p>
					</div>
					<div>
						<h3>Where</h3>
						<p>{where}</p>
					</div>
					{#if when}
						<div>
							<h3>When</h3>
							<p>
								{@html when}
							</p>
						</div>
					{/if}
					{#if link}
						<div>
							<p>
								<a role="button" href={link} rel="noreferrer" target="_blank"
									>More Info <span><ExternalLink></ExternalLink></span></a
								>
							</p>
						</div>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.c {
		display: none;
	}

	.c.visible {
		display: block;
	}

	p {
		text-align: left;
		margin: 1rem auto;
	}

	h2 {
		text-align: center;
	}

	ul {
		margin: 0;
		padding: 0;
		margin-top: 1rem;
	}

	li {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		max-width: 400px;
		margin: 1rem auto 2rem auto;
		align-items: flex-start;
		justify-content: center;
	}

	.img-container {
		display: block;
		width: 100%;
		max-width: 400px;
		background: rgba(255, 255, 255, 0.25);
		border-radius: 1rem;
		margin: 1rem auto;
		padding: 1.5em;
	}

	img {
		display: block;
		width: 100%;
		border-radius: 0.75rem;
		overflow: hidden;
	}

	.info {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.info div {
		margin-bottom: 1rem;
	}

	h3 {
		font-family: var(--sans);
		line-height: 1;
		margin: 0;
		text-transform: uppercase;
		text-align: center;
	}

	p {
		margin: 0;
		text-align: center;
		line-height: 1.25;
	}

	a {
		display: inline-flex;
		align-items: center;
		line-height: 1;
	}
</style>
