<script>
	import { format } from "d3";
	import { onMount } from "svelte";

	const backup = [
		{ day: "friday", time: "5 - 9", service: "dinner" },
		{ day: "saturday", time: "11 - 3", service: "brunch" },
		{ day: "saturday", time: "5 - 9", service: "dinner" },
		{ day: "sunday", time: "10 - 2", service: "brunch" },
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
			const res = await fetch("https://data.nocomplyfoods.com/hours.json");
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

<div class="c">
	<h2>Hours</h2>
	<div class="grid">
		<div class="meal brunch">
			<h3>Brunch</h3>
			<p>Sat: 11 - 3</p>
			<p>Sun: 10 - 2</p>
		</div>
		<div class="meal dinner">
			<h3>Dinner</h3>
			<p>Wed - Sat</p>
			<p>5 - 9</p>
		</div>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		justify-items: center;
		width: fit-content;
		margin: 2rem auto;
		position: relative;
	}

	.meal {
		position: relative;
		padding: 0 1rem;
		width: 100%;
	}

	.meal:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: white;
		opacity: 0.25;
		z-index: 0;
		border-radius: 1rem;
	}

	.meal p {
		text-align: center;
		text-transform: uppercase;
		position: relative;
		margin: 0.5rem auto;
	}

	.meal h3 {
		position: relative;
	}
</style>
