<script>
    import ButtonAudio from './ButtonAudio.svelte';
    export let index
    let read = false
    let readarray = [false, false, false]
    let dialog
    let content = [
        {
            title:"Ancaman Terselubung “Energi Bersih” Geothermal",
            content:"Pemerintah klaim serius mengatasi krisis iklim dengan meninggalkan energi kotor. Solusinya? Gas pol penuh proyek energi “hijau” seperti geothermal. 🌱 Tapi... fakta di lapangan:<br><ul><li>Masyarakat dipaksa pindah dari rumah dan kebunnya. 🏡🚧</li><li>Air dan udara tercemar.</li><li>Gempa bumi makin sering terjadi.</li><li>Ledakan dan kebocoran gas H2S menewaskan masyarakat. 💨☠️</li></ul>",
            read:false,
        },
        {
            title:"Proyek Hilirisasi Mencemari Tanah, Air, dan Udara",
            content:"“Hilirisasi nikel” jadi jargon penguasa dan pengusaha buat ngejar transisi energi dan janji lapangan kerja. 🚀💼<br><br>🔍 Faktanya:<br><ul><li>Lebih banyak yang dirugikan. Masyarakat adat dan penduduk lokal kehilangan tanah mereka. 😞</li><li>Keselamatan pekerja diabaikan. Ekspansi industri ini bikin banyak kasus kecelakaan kerja terjadi. ⚠️</li><li>Lingkungan rusak: Limbah pemrosesan nikel bikin sungai, udara, dan tanah tercemar. 🌊🌿</li></ul>",
            read:false,
        },
        {
            title:"Kerusakan di Balik Label “Green City” IKN",
            content:"Ibu Kota Nusantara (IKN) digadang-gadang bawa pemerataan pembangunan. Tapi, fakta di lapangan:<br><ul><li>IKN dibangun di atas penggusuran dan eksploitasi ruang hidup masyarakat setempat.</li><li>Pembangunan IKN bias daratan. Hutan mangrove menyusut, satwa-satwa dilindungi terancam punah.</li><li>Aturan dibuat ugal-ugalan! Proses penyusunan UU IKN super kilat, minim konsultasi publik. ⚖️</li><li>Sarat kepentingan oligarki. Gimana nggak? Skema pembiayaan dan tata kelolanya nyaris sepenuhnya diserahkan kepada para pengusaha. 💰</li></ul>",
            read:false,
        }
    ]
    let i = 0
    function open(e) {
        playAudio()
        i = e.target.dataset.index
        dialog.showModal()
    }
    function close(e) {
        playAudio()
        dialog.close()
        readarray[e.target.dataset.index] = true
        if (readarray.filter(d => d == true).length == 3) {
            read = true
        }
    }
    let play = false

	function playAudio() {
        play = true
        setTimeout(() => {play = false},100)
    }
</script>

<section>
    <div class="preseden">
        <button style:background-color={readarray[0] ? 'lightgreen' : '#fdf10f'} on:click={open} data-index=0>Ancaman Terselubung "Energi Bersih"</button>
        <button style:background-color={readarray[1] ? 'lightgreen' : '#fdf10f'} on:click={open} data-index=1>Pencemaran di Balik Hilirisasi</button>
        <button style:background-color={readarray[2] ? 'lightgreen' : '#fdf10f'} on:click={open} data-index=2>Kerusakan di Balik Label "Green City"</button>
    </div>
    {#if read}
    <div class="next">
        <button class="batal" on:click={index = 14}>Batalkan proyek</button>
        <button on:click={index = 15}>Tambah label hijau saja</button>
    </div>
    {/if}
</section>
<dialog bind:this={dialog} >
    <h2>{content[i].title}</h2>
    <p>{@html content[i].content}</p>
    <button on:click={close} data-index = {i}>Tutup</button>
</dialog>
<ButtonAudio {play} />
<style>
    section {
        display: flex;
        width:100%;
        height:100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .preseden {
        display: flex;
        width:90%;
        gap:0.5rem;
        justify-content: center;
    }
    .preseden > button {
        width:50%;
        max-width:120px;
        height:120px;
        border-radius: 0.5rem;
        border:none;
        font-family: 'Noto Sans', sans-serif;
        box-shadow: 2px 2px 0 #089f5e;
    }
    dialog {
        width:88%;
        max-width: 500px;
        background-color: lightyellow;
        border-radius: 0.5rem;
        font-family: 'Noto Sans', sans-serif;
        border: 2px solid black;
    }
    dialog > h2 {
        margin-top:0;
        font-family: "Lexend Giga", sans-serif;
        font-size:1.2rem;
    }
    dialog > p {
        font-size: 0.8rem;
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
    .next {
        margin-top:1rem;
        display: flex;
        flex-direction: column;
    }
    .next > button {
        margin-bottom:0.5rem;
        background-color: #fdf10f;
        border-radius: 0.5rem;
        font-weight: 600;
        padding:0.3rem;
        padding-left:0.8rem;
        padding-right:0.8rem;
        border: 2px solid black;
    }
</style>