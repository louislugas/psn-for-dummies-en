<script>
    import Game from '$lib/Game.svelte'
    import Intro from '$lib/Intro.svelte'
    import Start from './Start.svelte'

    import pageFlip from "$lib/audio/psn-audio-page-flip.mp3"
    import gameOver from "$lib/audio/psn-audio-game-over.mp3"
    import gameWin from "$lib/audio/psn-audio-success.mp3"

    let index = 0
    let bgAudio // page flip audio
    let goAudio // game over audio
    let winAudio // win audio

    // AUDIO PLAY
    $: if (index >= 1) {
        if (index == 23) {
            // game over audio
            goAudio.play()
        } else if (index == 24) {
            // game over audio
            goAudio.play()
        } else if (index == 14) {
            // win audio
            winAudio.play()
        } else {
            // audio play page flip
            bgAudio.play()
        }
    }
    // DEBUG CHECKER
    // $:console.log(index)
</script>

<!-- <input type="number" class="debug" bind:value={index} style:z-index="999"> -->

<section style:height={index <= 2 ? '100dvh' : '(100dvh - 150px)'}>
<!-- <h1>{index}</h1> -->
    {#if index == 0}
        <!-- START -->
        <Start bind:index />
    {:else if index >= 1 && index <= 2}
        <!-- INTRO -->
        <Intro bind:index />
    {:else}
        <!-- GAME -->
        <Game bind:index />
    {/if}
</section>

<audio bind:this={bgAudio} src={pageFlip}></audio>
<audio bind:this={goAudio} src={gameOver}></audio>
<audio bind:this={winAudio} src={gameWin}></audio>


<style>
    section {
        background-color: lightyellow;
        width:min(500px, 100%);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    /* h1 {
        position:fixed;
        top:0;
        z-index:99;
        color:yellow;
    } */
    .debug {
        position:fixed;
        top:0;
        left:0;
        font-size:2rem;
        width:100px;
    }
    @media only screen and (max-width: 400px) {
        section {
            justify-content: flex-start;
        }
    }
</style>