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
	<h3>Events</h3>
	<ul>
		{#each events as { what, where, when, link, image }}
			<li>
				<img src={image} alt={what} />

				<div class="info">
					<div>
						<h4>What</h4>
						<p>{what}</p>
					</div>
					<div>
						<h4>Where</h4>
						<p>{where}</p>
					</div>
					{#if when}
						<div>
							<h4>When</h4>
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
		margin: 16px auto;
	}

	h3 {
		text-align: center;
	}

	ul {
		margin: 0;
		padding: 0;
		margin-top: 16px;
	}

	li {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		max-width: 720px;
		margin: 0 auto;
		align-items: flex-start;
		justify-content: center;
	}

	img,
	.info {
		width: 100%;
		margin: 0 8px;
	}

	img {
		display: block;
		width: 100%;
		border: 8px solid var(--color-fg);
		margin: 16px auto;
		max-width: 420px;
	}

	.info {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.info div {
		margin-bottom: 16px;
	}

	h4 {
		font-family: var(--sans);
		line-height: 1;
		margin: 0;
		text-transform: uppercase;
		text-align: center;
	}

	p {
		margin: 0;
	}

	a {
		display: inline-flex;
		align-items: center;
		line-height: 1;
	}

	a span {
		margin-left: 8px;
	}

	@media only screen and (min-width: 640px) {
		ul {
			margin-top: 32px;
		}

		li {
			flex-direction: row;
		}

		img {
			width: 50%;
			margin: 0 8px 0 0;
		}

		.info {
			width: 50%;
			display: block;
		}

		h4 {
			text-align: left;
		}
	}
</style>
