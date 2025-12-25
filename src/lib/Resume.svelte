<script>
  import { text } from "@sveltejs/kit";
  import {goto} from "$app/navigation"

    export let index, sector, area, state, jurus

    let s = ""
    let t = []
    let a = ""
    let p = ""
    let i = []
    let j = ""

    $: if (sector == "bendungan") {
        s = "Bendungan"
        // t = ["Lim Hariyanto"]
        // i = ["lim-hariyanto"]
    } else if (sector == "jalantol") {
        s = "Jalan Tol"
        // t = ["Pertamina", "PLN"]
        // i = ["pertamina", "pln"]
    } else if (sector == "kereta") {
        s = "Kereta Api"
        // t = ["Boy Thohir"]
        // i = ["boy-thohir"]
    } else if (sector == "bandara") {
        s = "Bandara/Pelabuhan"
        // t = ["PT Aviasi Pariwisata Indonesia (Injourney)"]
        // i = ["injourney"]
    } else if (sector == "energi") {
        s = "Infrastruktur Energi"
        // t = ["Haji Isam"]
        // i = ["haji-isam"]
    } else if (sector == "smelter") {
        s = "Smelter"
        // t = ["Aguan"]
        // i = ["aguan"]
    } else if (sector == "kie") {
        s = "Kawasan Industri/Ekonomi"
        // t = ["Tomy Winata"]
        // i = ["tomy-winata"]
    } else if (sector == "pangan") {
        s = "Lumbung Pangan"
        // t = ["Martias Fangiono"]
        // i = ["martias-fangiono"]
    }

    $: if (jurus == "hijau") {
        j = 'Beri proyek label "hijau"'
    } else if (jurus == "nasionalisme") {
        j = "Gaungkan narasi nasionalisme dan kedaulatan"
    } else if (jurus == "csr") {
        j = "CSR: bagi sembako, bangun posyandu, tanam pohon, dll"
    } else if (jurus == "peneliti") {
        j = "Bayar peneliti abal-abal bikin kajian pesanan"
    } else if (jurus == "influencer") {
        j = "Bayar influencer untuk promosikan proyek"
    } else if (jurus == "iklan") {
        j = "Pasang iklan besar di media agar berita proyek positif"
    }

    $: if (area = 0) {
        a = "Kawasan Hutan/Masyarakat Adat"
    } else if (area = 1) {
        a = "Kawasan Pertanian/Perkebunan"
    } else if (area = 2) {
        a = "Kawasan Pesisir"
    } else if (area = 3) {
        a = "Kawasan Permukiman"
    }

    $: if (state == 1) {
        p = "Membubarkan Massa"
    } else if (state == 2) {
        p = "Menangkap Massa Aksi"
    } else if (state == 3) {
        p = "Menangkap Jurnalis"
    }
</script>

<section>
    <h2>Resume Proyek</h2>
    <div>
        <div class="resume">
            <p class="head">Proyek:</p>
            <p class="content">{s}</p>
        </div>
        <div class="resume">
            <p class="head">Perizinan:</p>
            <p class="content">Lengkap</p>
        </div>
        <div class="resume">
            <p class="head">Menggusur Lahan:</p>
            <p class="content">{a}</p>
        </div>
        <div class="resume">
            <p class="head">Metode Penanganan Massa</p>
            <p class="content">{p}</p>
        </div>
        <div class="resume">
            <p class="head">Jurus Cuci Dosa:</p>
            <p class="content">{j}</p>
        </div>
    </div>

    <div class='button-container'>
        <button on:click={() => index = 0}>Selesai</button>
        <a class='button' href="https://projectmultatuli.org/proyek-sengsara-nasional/" target="_blank">Baca Serial PSN</a>
    </div>
    <!-- <button on:click={() => index = 0}
        style:margin-top="0.5rem"
    >Bagikan</button> -->
    <!-- <div class="divider"></div> -->
    <div class="congratulations">
        <div class="left">
            <img src="./images/prabowo-subianto.png" alt="Prabowo Subianto - PSN for Dummies">
        </div>
        <div class="center">
            <p>
                Kamu sudah siap jadi investor PSN!
            </p>
        </div>
        <div class="right">
            <img src="./images/joko-widodo.png" alt="Joko Widodo - PSN for Dummies">
        </div>
    </div>
    <div class="dialog"></div>
</section>

<style>
    section {
        display: flex;
        margin-top: 1rem;
        width:100%;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        height:calc(100vh - 1rem);
    }
    div {
        width:90%;
    }
    .divider {
        height:100%;
    }
    .congratulations {
        width:100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-grow: 2;
        /* margin-bottom: 1rem; */
        
    }
    .congratulations > div {
        width:33%;
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1;
    }
    .left, .right {
        align-items: flex-end;
    }
    .congratulations > div > img {
        height:100%;
        width: 100%;
        aspect-ratio: 1;
        object-fit: contain;
    }
    .center > p {
        font-family: 'Lexend Giga', sans-serif;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
    }
    h2 {
        font-family: 'Lexend Giga', sans-serif;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
    p {
        font-family: 'Noto Sans', sans-serif;
        margin: 0;
    }
    .resume {
        margin-bottom:0.5rem;
    }
    .head {
        font-family: 'Lexend Giga', sans-serif;
        font-size: 0.7rem;
        font-weight: bold;
        margin-bottom: 0.1rem;
    }
    .content {
        font-size: 1rem;
        font-weight: 300;
    }
    .tokoh-container {
        display: flex;
    }
    .tokoh {
        width:100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    img {
        width:100px;
        height:100px;
        /* margin-bottom:0.5rem; */
    }
    button {
        margin-top:0;
        font-family: 'Noto Sans', sans-serif;
        background-color: #FDF10F;
        border-radius: 0.5rem;
        font-weight: 600;
        padding:0.3rem;
        padding-left:0.8rem;
        padding-right:0.8rem;
        align-self: flex-start;
    }
    .button {
        margin-top:0;
        font-family: 'Noto Sans', sans-serif;
        background-color: #FDF10F;
        border-radius: 0.5rem;
        font-weight: 600;
        padding:0.3rem;
        padding-left:0.8rem;
        padding-right:0.8rem;
        align-self: flex-start;
        color:black;
        text-decoration: none;
        font-size:0.8rem;;
        border: 2px black outset;
    }
    .button-container {
        display: flex;
        flex-direction: column;
        margin-top:0.5rem;
        gap:0.2rem;
    }
    .dialog {
        display: none;
    }
    @media only screen and (max-width: 400px) {
        .content {
            font-size: 0.8rem;
        }
        .center > p {
            font-size:0.9rem;
        }
        button {
            font-size:0.7rem;
            padding:0.2rem;
            border-radius: 0.25rem;
        }
        .button {
            font-size:0.7rem;
            padding:0.2rem;
            border-radius: 0.25rem;
        }
        .congratulations {
            /* margin-bottom:2rem; */
        }
        .dialog {
            display: flex;
            width:min(500px, 100%);
            background-color: #fdf10f;
            height:150px;
            /* position: absolute; */
            bottom:0;
            border-top: solid #089f5e 5px;
            max-height:180px;
        }
    }
</style>