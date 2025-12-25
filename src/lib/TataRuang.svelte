<script>
	import {grid} from '$lib/grid'
    import Map from '$lib/Map.svelte'
    import ButtonAudio from '$lib/ButtonAudio.svelte'

    export let index, area = 0

    let play = false

    function playAudio() {
        play = true
        setTimeout(() => {play = false},100)
    }
    let allowClick = true

    let popupText, dialog

    let choice = ""

    $: if (choice) {
		dialog.showModal()
        allowClick = false
        if (choice == "forest area") {
            area = 0
        } else if (choice == "indigenous land") {
            area = 0
        } else if (choice == "farmland") {
            area = 1
        } else if (choice == "coastal area" ) {
            area = 2
        } else if (choice == "settlements") {
            area = 3
        }
	}

	function close() {
        allowClick = true
        dialog.close()
        playAudio()
    }
    function next() {
        allowClick = true
        dialog.close()
        index = 8
    }
</script>

<section>
<Map bind:choice/>

<dialog bind:this={dialog}>
    <p>You have selected the <strong>{choice}</strong> area</p>
    <button on:click={close}>Change Location</button>
    <button on:click={next}>Continue</button>
</dialog>

<ButtonAudio {play} />

</section>

<style>
	section {
		display:flex;
		flex-wrap:wrap;
		width:100%;
        height:100%;
        position: relative;
	}
	.grid {
		width:12.5%;
		aspect-ratio:1;
		border:black 1px solid;
		box-sizing:border-box
	}
    dialog {
        background-color: lightyellow;
        border-radius: 0.5rem;
        font-family: 'Noto Sans', sans-serif;
        border: 2px solid black;
    }
    dialog > button {
        background-color: #fdf10f;
        border-radius: 0.5rem;
        font-weight: 600;
        padding:0.3rem;
        padding-left:0.8rem;
        padding-right:0.8rem;
        border: 2px solid black;
    }
</style>
