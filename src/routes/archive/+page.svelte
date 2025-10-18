<script>
	import { onMount } from "svelte";
	import { descending } from "d3";
	import Meta from "$components/Meta.svelte";
	import loadArchive from "$utils/loadArchive.js";
	import loadCsv from "$utils/loadCsv.js";

	// --- State Variables ---
	let brunch = [];
	let dinner = [];
	let tableData = [];

	// 'brunch' or 'dinner', determines which menu type is active
	let selectedService = "brunch";

	// The selected file path (e.g., "archive/brunch/2025-10-11.csv")
	let selected;

	const preloadFont = [
		"../assets/fonts/LondrinaSolid-Black.woff2",
		"../assets/fonts/SometypeMono-Medium.woff2",
		"../assets/fonts/SometypeMono-Bold.woff2"
	];

	// --- Data Fetching ---
	async function updateData() {
		// No need to check for selected; the reactive statement handles that.
		const url = `https://data.nocomplyfoods.com/${selected}`;
		const tempData = await loadCsv(url);

		// Clean up the data before displaying
		tempData.forEach((d) => {
			delete d.type;
			delete d.service;
		});

		tableData = [...tempData];
	}

	// --- Event Handlers ---
	function setService(service) {
		selectedService = service;
		// When service changes, select the first available date automatically
		if (service === "brunch" && brunch.length > 0) {
			selected = brunch[0];
		} else if (service === "dinner" && dinner.length > 0) {
			selected = dinner[0];
		}
	}

	// --- Reactive Statements ---
	// A derived store that holds the options for the active dropdown
	$: optionsToShow = selectedService === "brunch" ? brunch : dinner;

	// This automatically calls updateData() whenever 'selected' changes
	$: if (selected) updateData();

	// --- Lifecycle ---
	onMount(async () => {
		try {
			const { data } = await loadArchive();
			if (data) {
				brunch = data.brunch;
				dinner = data.dinner;
				brunch.sort(descending);
				dinner.sort(descending);
				// Initialize the view to show the first brunch menu
				setService("brunch");
			} else {
				throw new Error("No data loaded from archive.");
			}
		} catch (err) {
			console.error("Failed to load archive:", err);
		}
	});
</script>

<Meta {preloadFont} hide={true}></Meta>

<div class="c">
	<h1>No Comply Foods Archive</h1>

	<section id="ui" class:visible={tableData.length}>
		<div class="service-selector">
			<button
				class:active={selectedService === "brunch"}
				on:click={() => setService("brunch")}
			>
				Brunch
			</button>
			<button
				class:active={selectedService === "dinner"}
				on:click={() => setService("dinner")}
			>
				Dinner
			</button>
		</div>

		<select bind:value={selected}>
			{#each optionsToShow as value}
				{@const date = value
					.replace(`archive/${selectedService}/`, "")
					.replace(".csv", "")}
				<option {value}>{date}</option>
			{/each}
		</select>
	</section>

	<section id="menu">
		{#if tableData.length}
			<table>
				<thead>
					<tr>
						{#each Object.keys(tableData[0]) as header}
							<th>{header}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each tableData as row}
						<tr>
							{#each Object.values(row) as cell}
								<td>{cell}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		{:else}
			<p style="text-align: center;">Loading archival menus...</p>
		{/if}
	</section>
</div>

<style>
	h1 {
		padding: 16px;
		text-align: center;
		font-size: var(--36px);
	}

	section {
		width: 90%;
		margin: 32px auto;
		max-width: 960px;
	}

	#ui {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		visibility: hidden;
	}

	#ui.visible {
		visibility: visible;
	}

	table {
		font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
		width: 100%;
		border-collapse: collapse;
	}

	table tr {
		border-bottom: 1px solid var(--color-fg);
	}

	table td,
	table th {
		padding: 8px 4px;
		text-align: left;
	}

	tr th:nth-of-type(1) {
		width: 25%;
	}
	tr th:nth-of-type(2) {
		width: 55%;
	}
	tr th:nth-of-type(3) {
		width: 5%;
		min-width: 4em;
	}

	tr th:nth-of-type(3),
	tr td:nth-of-type(3) {
		text-align: right;
	}

	tr td:nth-of-type(1) {
		font-size: 1.25em;
		line-height: 1.1;
	}

	select {
		font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
		font-size: var(--18px);
	}

	button {
		opacity: 0.5;
		font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
		font-size: var(--18px);
	}

	button.active {
		opacity: 1;
	}
</style>
