<script>
    export let index, area, allowClick
</script>

<section>
    {#if index == 8}
        <button style:height="160px" on:click={() => {index = 11}}>Nggak usah deh, seadanya aja.</button>
        <button style:height="160px" on:click={() => {index = 9}}>Boleh deh sosialisasi yang bener.</button>
    {:else if index == 9}
        <!-- PILIH AREA -->
        {#if area == 0}
            <button on:click={() => {index = 10}}>Minta KLHK ubah status hutan</button>
            <button on:click={() => {index = 8; allowClick = true}}>Cari lokasi lain</button>
        {:else if area == 1}
            <button on:click={() => {index = 10}}>Minta pemerintah revisi tata ruang</button>
            <button on:click={() => {index = 8; allowClick = true}}>Cari lokasi lain</button>
        {:else if area == 2}
            <button on:click={() => {index = 10}}>Minta pemerintah revisi tata ruang</button>
            <button on:click={() => {index = 8; allowClick = true}}>Cari lokasi lain</button>
        {:else if area == 3}
            <button on:click={() => {index = 10}}>Bebaskan lahan masyarakat</button>
            <button on:click={() => {index = 8; allowClick = true}}>Cari lokasi lain</button>
        {/if}

    {:else if index == 10}
        <!-- AMDAL -->
        <button style:height="160px" on:click={() => {index = 12}}>Nggak usah, lah 🤷‍♂️</button>
        <button style:height="160px" on:click={() => {index = 12}}>Undang sosialisasi proyek, tapi daftar hadirnya jadi tanda persetujuan masyarakat</button>
        <button style:height="160px" on:click={() => {index = 11}}>Libatkan masyarakat secara bermakna, dong. 😇</button>

    {:else if index == 14}
        <!-- AMDAL -->
        <button on:click={() => {index = 13}}>Kembali</button>
        <button on:click={() => {index = 24}}>Batalkan</button>

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