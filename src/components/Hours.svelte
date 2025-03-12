<script>
	import { format } from "d3";
	import { onMount } from "svelte";

	const backup = [
		{ day: "friday", time: "5 - 9", service: "dinner" },
		{ day: "saturday", time: "11 - 3", service: "brunch" },
		{ day: "saturday", time: "5 - 9", service: "dinner" },
		{ day: "sunday", time: "11 - 3", service: "brunch" },
		{ day: "sunday", time: "5 - 9", service: "dinner" }
	];

	let hours;

	function cleanTime(str) {
		const [a, b] = str.split("-");
		const at = +a.trim();
		const bt = +b.trim();
		const start = format(" >2")(at);
		const end = bt;
		return `${start} - ${end}`;
	}

	async function updateHours() {
		try {
			// TODO test a fail
			// TODO test no data
			const res = await fetch(
				`https://data.nocomplyfoods.com/hours.json?version=${Date.now()}`
			);
			const data = await res.json();

			const valid = data.items
				.filter((d) => d.day && d.time && d.service)
				.map((d) => ({
					...d,
					day: d.day.substring(0, 3),
					time: cleanTime(d.time)
				}));

			const hasData = valid.length > 0;
			if (hasData) hours = valid;
			else throw new Error("no data");
		} catch (err) {
			console.log(err);
			hours = backup;
		}
	}

	onMount(async () => {
		await updateHours();
	});
</script>

{#if hours}
	<div class="info">
		<div class="hours">
			<h3>Hours</h3>
			<ul>
				{#each hours as { day, time, service }}
					<li>
						<span class="day">{day}:</span><span class="time">{time}</span><span
							class="service">{service}</span
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}

<style>
	div.info {
		padding: 16px;
		margin-top: 32px;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		margin-top: 8px;
	}

	li {
		text-align: center;
		text-transform: uppercase;
	}

	span {
		margin-left: 0.5em;
	}

	span:first-of-type {
		margin-left: 0;
	}

	h3 {
		text-align: center;
	}

	@media only screen and (min-width: 640px) {
		div.info {
			position: absolute;
			top: 0;
			right: 0;
			text-align: right;
			margin-top: 0;
		}

		h3 {
			text-align: right;
		}

		li {
			text-align: right;
		}
	}
</style>
