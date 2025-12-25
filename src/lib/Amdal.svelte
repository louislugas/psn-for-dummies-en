<script>
    export let index
</script>

<section>
    <button on:click={() => {index = 5}}>Buat</button>
    <button on:click={() => {index = 7}}>Tidak usah</button>
</section>

<style>
    section {
        display: flex;
        width:100%;
        height:100%;
        justify-content: center;
        align-items: center;
    }
</style>