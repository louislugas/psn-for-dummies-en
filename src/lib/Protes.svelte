<script>
	import Background from '$lib/SVGBackground.svelte'
	import Police from '$lib/SVGPolice.svelte'
	import Protester from '$lib/SVGProtester.svelte'
	import Journalist from '$lib/SVGJournalist.svelte'
	import Direct from '$lib/Direct.svelte'
	import ButtonAudio from '$lib/ButtonAudio.svelte'

	let showDirect = true

	let play = false

	function playAudio() {
		console.log("PLAY")
        play = true
        setTimeout(() => {play = false},100)
    }

    export let index, state = 0
	
	function reset() {
		state = 0
		playAudio()
	}

	$: if (state > 0) {
		playAudio()
		showDirect = false
	}
</script>

<section>
	<svg viewBox="0 0 300 300" >
		<Background />
		<Police bind:state/>
		<Protester bind:state/>
		<Journalist bind:state/>
	</svg>
	{#if state > 0}
	<div class="popover">{
		state == 1 ? "Bubarkan massa aksi" :
		state == 2 ? "Tangkap massa aksi" :
		state == 3 ? "Tangkap jurnalis" :
		""
	}
	<div style:margin-top="1rem">
		<button on:click={() => {index = 12}}>Ya</button>
		<button on:click={reset}>Tidak</button>
	</div>
	</div>
	{/if}
	{#if showDirect}
		<Direct 
			bind:showDirect
			{play}
			content = "Klik karakter di gambar untuk memilih tindakan"
		/>
	{/if}
</section>

<ButtonAudio {play} />

<style>
	section {
		position:relative;
		display:flex;
		justify-content:center;
		align-items:center;
		height:100%;
		width:100%;
	}
	svg {
		position:absolute;
		/* border:solid 1px black; */
	}
	.popover {
		position:absolute;
		top:20px;
		width:50%;
		height:25%;
		background-color:lightyellow;
		border-radius:0.5rem;
		border:2px solid black;
		display:flex;
		justify-content:center;
		align-items:center;
		flex-direction:column;
		font-family: 'Noto Sans', sans-serif;
		font-size:0.8rem;	
	}
	button {
		background-color: #fdf10f;
        border-radius: 0.5rem;
        font-weight: 600;
        padding:0.3rem;	
        padding-left:0.8rem;
        padding-right:0.8rem;
        border: 2px solid black;
	}
</style>
