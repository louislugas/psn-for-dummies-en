<script>
    export let index, area, allowClick
</script>

<section>
    {#if index == 8}
        <button style:height="160px" on:click={() => {index = 11}}>No, or just do the bare minimum</button>
        <button style:height="160px" on:click={() => {index = 9}}>Yes, let’s do proper consultations</button>
    {/if}

</section>

<style>
    section {
        display: flex;
        width:100%;
        height:100%;
        justify-content: center;
        align-items: center;
        gap:0.5rem;
    }
    button {
        width:50%;
        max-width:120px;
        height:120px;
        background-color: #fdf10f;
        border-radius: 0.5rem;
        border:none;
        font-family: 'Noto Sans', sans-serif;
        box-shadow: 2px 2px 0 #089f5e;
    }
</style>