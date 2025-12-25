<script>
    import ButtonAudio from "./ButtonAudio.svelte";

    export let index, sector, jurus

    let play = false
    let selected = false

    function select(e) {
        if (index == 3) {
            sector = e.target.dataset.value
        } else if  (index == 13) {
            jurus = e.target.dataset.value
        }
        selected = true
        playAudio()
    }

    function playAudio() {
        play = true
        setTimeout(() => {play = false},100)
    }
</script>

<section>
    {#if index == 3}
        <h2>Pilih sektor usahamu:</h2>
        <!-- <select bind:value={sector}>
            <option value="pertambangan">Pertambangan</option>
            <option value="agrikultur">Agrikultur</option>
            <option value="pariwisata">Pariwisata</option>
        </select> -->
        <div>
            <button class="sector" class:selected={sector == "bendungan" && selected} on:click={select} data-value="bendungan">Bendungan</button>
            <button class="sector" class:selected={sector == "jalantol" && selected} on:click={select} data-value="jalantol">Jalan Tol</button>
            <button class="sector" class:selected={sector == "kereta" && selected} on:click={select} data-value="kereta">Kereta Api</button>
            <button class="sector" class:selected={sector == "bandara" && selected} on:click={select} data-value="bandara">Bandara/ Pelabuhan</button>
            <button class="sector" class:selected={sector == "energi" && selected} on:click={select} data-value="energi">Infrastruktur Energi</button>
            <button class="sector" class:selected={sector == "smelter" && selected} on:click={select} data-value="smelter">Smelter</button>
            <button class="sector" class:selected={sector == "kie" && selected} on:click={select} data-value="kie">Kawasan Industri/ Ekonomi</button>
            <button class="sector" class:selected={sector == "pangan" && selected} on:click={select} data-value="pangan">Lumbung Pangan</button>
        </div>
        <button class="next" on:click={() => {index = 4}} disabled={!selected}>Lanjut</button>
    {:else if index == 13}
            <h2>Pilih satu jurus yang kamu paling cocok!</h2>
            <!-- <select bind:value={sector}>
                <option value="pertambangan">Pertambangan</option>
                <option value="agrikultur">Agrikultur</option>
                <option value="pariwisata">Pariwisata</option>
            </select> -->
            <div>
                <button class="sector" class:selected={jurus == "hijau" && selected} on:click={select} data-value="hijau">Beri proyekmu label "hijau"</button>
                <button class="sector" class:selected={jurus == "nasionalisme" && selected} on:click={select} data-value="nasionalisme">Gaungkan narasi nasionalisme dan kedaulatan</button>
                <button class="sector" class:selected={jurus == "csr" && selected} on:click={select} data-value="csr">CSR: bagi sembako, bangun posyandu, tanam pohon, dll</button>
                <button class="sector" class:selected={jurus == "peneliti" && selected} on:click={select} data-value="peneliti">Bayar peneliti abal-abal bikin kajian pesanan</button>
                <button class="sector" class:selected={jurus == "influencer" && selected} on:click={select} data-value="influencer">Bayar influencer untuk promosikan proyek</button>
                <button class="sector" class:selected={jurus == "iklan" && selected} on:click={select} data-value="iklan">Pasang iklan besar di media agar berita proyekmu positif</button>
            </div>
            <button class="next" on:click={() => {index = 14}} disabled={!selected}>Lanjut</button>
    {/if}
</section>

<ButtonAudio {play} />

<style>
    h2 {
        font-family: "Lexend Giga", sans-serif;
        width:88%;
        text-align: center;  
    }
    section {
        width:100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    section > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap:0.5rem;
    }
    select {
        font-size: 1.5rem;
        margin-bottom:1.5rem;
    }
    .sector {
        width:21%;
        aspect-ratio: 1/1.2;
        font-size: 0.7rem;
    }
    button {
        background-color: lightgrey;
        border-radius: 0.5rem;
        border:none;
        font-family: 'Noto Sans', sans-serif;
        box-shadow: 2px 2px 0 #089f5e;
        transition: background 300ms ease-in-out;
    }
    .next {
        margin-top:1rem;
        background-color: lightyellow;
        border-radius: 0.5rem;
        font-weight: 600;
        padding:0.3rem;
        padding-left:0.8rem;
        padding-right:0.8rem;
        border: 2px solid black;
    }
    .selected {
        background-color: #fdf10f;
    }
    .next:disabled {
        border: 2px solid grey;
        box-shadow: 2px 2px 0 grey;
    }
    @media only screen and (max-width: 400px) {
        .sector {
            aspect-ratio: 1/1.5;
            font-size:0.7rem;
        }
    }
</style>