<script>
	import Direct from './Direct.svelte'
	import ButtonAudio from './ButtonAudio.svelte';
	import {onMount} from 'svelte'

    export let match = false, index

	import { dropzone, draggable } from '$lib/dnd';

	let showDirect = true
	let play = false

	function playAudio() {
        play = true
        setTimeout(() => {play = false},100)
    }

	let data = {
		columns: [
			{
				id: 1,
				label: 'Permits'
			},
			{
				id: 2,
				label: 'Location Permits'
			},
			{
				id: 3,
				label: 'Environmental Permits'
			},
			{
				id: 4,
				label: 'Building Permits'
			}
		],
		cards: [
			{
				column: 1,
				id: 'a',
				target: 2,
				title: 'Land Check'
			},
			{
				column: 1,
				id: 'b',
				target: 2,
				title: 'Spatial Planning'
			},
			{
				column: 1,
				id: 'c',
				target: 2,
				title: 'Release of Forest Area Status'
			},
			{
				column: 1,
				id: 'd',
				target: 3,
				title: 'Environmental Feasibility Study'
			},
			{
				column: 1,
				id: 'e',
				target: 3,
				title: 'Environmental Impact Analysis'
			},
			{
				column: 1,
				id: 'f',
				target: 4,
				title: 'Site Plan and Building Design'
			},
			{
				column: 1,
				id: 'g',
				target: 4,
				title: 'Land and Building Tax'
			}
		]
	}

	function shuffle(array) {
		let currentIndex = array.length;

		// While there remain elements to shuffle...
		while (currentIndex != 0) {

			// Pick a remaining element...
			let randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
		}
	}

	shuffle(data.cards)

	let value = [0,0,0]

	function checkData(card) {
		value = [0,0,0]
		card.forEach((c) => {
			if (c.column == 2 && c.column == c.target) {
				value[0]++
			}
			if (c.column == 3 && c.column == c.target) {
				value[1]++
			}
			if (c.column == 4 && c.column == c.target) {
				value[2]++
			}
		})
	}
	$: if (data) {
		checkData(data.cards)
	}
	
	$: if (value[0] == 3 && value[1] == 2 && value[2] == 2) {
		match = true
	}

	$: if (match) {
		index = 6
	}
</script>

<!-- {#if mounted} -->
<ButtonAudio {play} />
<section>
	<ul>
		<div class="source">
			{#each data.columns as column}
				{@const cards = data.cards.filter((c) => c.column === column.id)}
				{#if column.id == 1}
				<li
					style:border="none"
					class="column"
					use:dropzone={{
						on_dropzone(card_id) {
							const card = data.cards.find((c) => c.id === card_id);
							card.column = column.id;
							data = data;
							showDirect = false
							playAudio()
						}
					}}
				>
					<h2>{column.label}</h2>
					{#if cards.length > 0}
						<ul class="cards">
							{#each cards as card}
								<li draggable={true} use:draggable={card.id} 
								class="card"
								style:background-color={
									card.target == 2 ? '#FFFFAF' :
									card.target == 3 ? '#C6FFC6' :
									card.target == 4 ? '#FFC5AD' : '#FFFFAF'
								}
								>
									{card.title}
								</li>
							{/each}
						</ul>
					{:else}
						<p>No documents yet...</p>
					{/if}
				</li>
				{/if}
			{/each}
		</div>
		<div class="target">
			{#each data.columns as column, i}
				{@const cards = data.cards.filter((c) => c.column === column.id)}
				{#if column.id > 1}
					<li
					class="column"
					style:background-color={
						column.id == 2 ? '#FFFF6E' :
						column.id == 3 ? '#70FF70' : 
						column.id == 4 ? '#FF8C5D' :
						'#70FF70'
					}
					use:dropzone={{
						on_dropzone(card_id) {
							const card = data.cards.find((c) => c.id === card_id);
							card.column = column.id;
							data = data;
							showDirect = false
							playAudio()
						}
					}}
				>
					<h2>{column.label}
						{#each Array(value[i-1]) as _}
							<span>✅</span>
						{/each}
					</h2>
					{#if cards.length > 0}
						<ul class="cards">
							{#each cards as card}
								<li draggable={true} use:draggable={card.id} class="card"
								style:background-color={
									card.target == 2 ? '#FFFFAF' :
									card.target == 3 ? '#C6FFC6' :
									card.target == 4 ? '#FFC5AD' : '#FFFFAF'
								}
								style:border-color={
									card.target == column.id ? "green" : "red"
								}
								>
									{card.title}
									<br>
									{card.target == column.id ? "✅" : "❌"}
								</li>
							{/each}
						</ul>
					{:else}
						<p>No documents yet...</p>
					{/if}
				</li>
				{/if}
			{/each}
		</div>
	</ul>
	{#if showDirect}
	<Direct 
		bind:showDirect
		bind:play
		content="Drag documents on the left into their correct categories on the right."
	/>
	{/if}
</section>
<!-- {/if} -->

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	div {
		gap:0.5rem;
		height:100%;
	}
	.source {
		width:50%;
	}
	.target {
		width:50%;
	}
	div >li {
		height:100%;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: 0.5rem;
		width:100%;
		
	}
	li {
		padding: 1rem;
		background-color: hsl(0, 0%, 100%);
		border-style: solid;
		border-width: 1px;
		border-radius: 0.2rem;
		border-color: hsl(206, 20%, 80%);
		font-family: 'Noto Sans', sans-serif;
		word-break: break-word;
	}
	.column {
		padding:0.5rem;
		background-color: transparent;
	}

	.card {
		width:55px;
		height:70px;
		padding:0.3rem;
		font-size:0.65rem;
	}

	h2 {
		margin-block-start: 0;
		margin-block-end: 0.5rem;
		pointer-events:none;
		font-size:0.8rem;
		font-family: 'Lexend Giga', sans-serif;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	p {
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		font-size: 0.8rem;
		font-family: 'Noto Sans', sans-serif;
	}

	.cards {
		flex-direction: row;
		flex-wrap:wrap;
	}

	.column:global(.droppable) {
		outline: 0.1rem solid hsl(15, 100%, 55%);;
		outline-offset: 0.25rem;
	}
	.target {
		display:flex;
		flex-direction:column;
	}
	.target > .column {
		min-height:120px;
		border:none;
	}

	.column:global(.droppable) * {
		pointer-events: none;
	}
	@media only screen and (max-width: 500px) {
        p {
			font-size:0.8rem;
		}
		.source {
			width:50%;
		}
		.target {
			width:50%;
		}
		.target > .column {
			min-height:110px;
		}
		.card {
			width:50px;
			height:70px;
			padding:0.3rem;
			font-size:0.6rem;
		}
    }
</style>
