<script>
    export let play = false

    import button from "$lib/audio/psn-audio-button.mp3"

    let buttonAudio

    $: if (play) {
        buttonAudio.play()
    }
</script>

<audio bind:this={buttonAudio} src={button}></audio>