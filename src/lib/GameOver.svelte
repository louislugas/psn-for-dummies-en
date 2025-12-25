<script>
    export let index
</script>

<section>
    <h2>GAME OVER</h2>
    {#if index == 23} <!-- GAME OVER via AMDAL -->
    <button on:click={() => {index = 9}}>Retry</button>
    {/if}

</section>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width:100%;
        height: 100%;
    }
    h2 {
        font-family: 'Lexend Giga', sans-serif;
    }
    button {
        font-family: 'Noto Sans', sans-serif;
        background-color: #FDF10F;
        border-radius: 0.5rem;
        font-weight: 600;
        padding:0.3rem;
        padding-left:0.8rem;
        padding-right:0.8rem;
	}
</style>