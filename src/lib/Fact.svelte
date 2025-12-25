<script>
    import {fly} from 'svelte/transition'
    import {onMount, onDestroy} from 'svelte'

    export let index

    let show = false

    onMount(() => {
        setTimeout(() => {
            show = true
        }, 100)
    })
    onDestroy(() => {
        show = false
    })

</script>

<section 
    style:margin-top="{index == 16 ? 0 : 3}rem"
    style:justify-content="{index == 16 ? "center" : "start"}"
>

    {#if index == 16}
        <button on:click={() => {index = 17}}>Cek Fakta Lapangan Kerja</button>
    {:else if index == 17}
        <h3>Klaim Kesuksesan PSN</h3>
        <p in:fly={{x:-100}} style:transform="translateX({show? 0 : -100}px)"
        style:opacity="{show ? 1 : 0}">🚀 PSN <a target='_blank' class='link-article' href='https://indonesia.go.id/kategori/indonesia-dalam-angka/7800/capaian-sewindu-proyek-strategis-nasional?lang=1'>diklaim</a> sukses! Ekonomi tumbuh Rp1.670 triliun, 4,5 juta lapangan kerja tercipta</p>
        <p in:fly={{x:-100, delay:400}}
        style:transform="translateX({show? 0 : -100}px)"
        style:opacity="{show ? 1 : 0}"
        style:transition-delay="400ms">📊 198 proyek PSN rampung (2016-2024) dengan <a target='_blank' class='link-article' href='https://www.tempo.co/ekonomi/198-psn-rp1-614-triliun-selesai-dibangun-pada-2016-2024-jokowi-akan-evaluasi-yang-lelet-58896'>total dana</a> Rp1.614 triliun.</p>
    {:else if index == 18}
        <h3>Gimana fakta di lapangan?</h3>
        <p in:fly={{x:-100}}>🌍 PSN bikin <a target='_blank' class='link-article' href='https://www.kpa.or.id/image/2024/01/catahu-2023-kpa.pdf'>ribuan</a> keluarga kehilangan lahan & pekerjaan.</p>
        <p in:fly={{x:-100, delay:400}}>⚡ Wilayah industri hilirisasi = kemiskinan <a target='_blank' class='link-article' href='https://www.youtube.com/watch?v=BBZOYB0niL8&ab_channel=NALARINSTITUTE'>lebih tinggi</a> dari rata-rata nasional.</p>
        <p in:fly={{x:-100, delay:800}}>☠️ Pencemaran & konflik agraria di sekitar PSN industri nikel → produktivitas turun. Petani & nelayan bisa <a target='_blank' class='link-article' href='https://celios.co.id/celios-x-crea-economic-and-health-impact-of-nickel-processing-industry/'>rugi</a> Rp3,64 T dalam 15 tahun!</p>
    {:else if index == 19}
        <h3>Hasilnya?</h3>
        <p in:fly={{x:-100}}>📉 Ekonomi stagnan di 5% (sampai 2024).</p>
        <p in:fly={{x:-100, delay:400}}>⚠️ 2024: Deflasi beruntun pertama sejak 1999 → daya beli masyarakat melemah.</p>
        <p in:fly={{x:-100, delay:800}}>💼 PHK melonjak: 77.965 orang kena PHK (Januari-Desember 2024), 3x lipat dari 2022.</p>
        <p in:fly={{x:-100, delay:1200}}>🎭 Gig economy makin rame! 57,95% tenaga kerja di sektor <a target='_blank' class='link-article' href='https://www.bps.go.id/id/publication/2024/12/20/145b7ca9b2e159c6c0493290/booklet-sakernas-agustus-2024.html'>informal</a> (80 juta orang) per Agustus 2024.</p>
    {:else if index == 20}
        <h3>Hasilnya?</h3>
        <p in:fly={{x:-100}}>📉 Kelas menengah <a target='_blank' class='link-article' href='https://www.instagram.com/tvr.parlemen/reel/C_19oldR801/'>anjlok</a>. Dari 57,33 juta (2019) → 47,85 juta (2024).</p>
        <p in:fly={{x:-100, delay:400}}>🚨 Ketimpangan ekstrem! Indonesia peringkat <a target='_blank' class='link-article' href='https://indonesia.oxfam.org/latest/stories/ketimpangan-even-it'>ke-6</a> dunia soal kesenjangan. Yang tajir? Makin tajir: 50 orang terkaya = <a target='_blank' class='link-article' href='https://celios.co.id/report-economic-inequality-indonesia-2024/'>kekayaan</a> 50 juta rakyat! Top 3 orang terkaya kekayaannya naik 3x lipat sejak 2020, sementara upah pekerja cuma naik 15%. </p>
    {:else if index == 21}
        <h3>PSN di Era Kegelapan Prabowo-Gibran</h3>
        <p in:fly={{x:-100}}>Jangan khawatir, Prabowo udah menetapkan 77 PSN lewat Perpres No. 12 Tahun 2025. Sebagian adalah limpahan dari PSN di masa Jokowi.</p>
        <p in:fly={{x:-100, delay:400}}>Proyek Andalan Prabowo:</p>
        <ul>
            <li in:fly={{x:-100, delay:800}}>Makanan Bergizi Gratis (MBG)</li>
            <li in:fly={{x:-100, delay:1200}}>Lumbung Pangan (Food Estate)</li>
            <li in:fly={{x:-100, delay:1600}}>Pengelolanya adalah BPI Nasional Danantara dengan 💰Rp750 triliun hasil dari efisiensi anggaran kementerian/lembaga!</li>
        </ul>
    {/if}
</section>

<style>
    section {
        display: flex;
        width:90%;
        margin:0 auto;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    button {
        background-color: #fdf10f;
        border-radius: 0.5rem;
        font-weight: 600;
        padding:0.3rem;
        padding-left:0.8rem;
        padding-right:0.8rem;
        border: 2px solid black;
    }
    h3 {
        font-family: 'Lexend Giga', sans-serif;
        width:100%;
        text-align: center;
    }
    p {
        font-family: 'Noto Sans', sans-serif;
        padding: 0.5rem;
        background-color: #FDF10F;
        border-radius: 0.5rem;
        box-shadow: 2px 2px 0 #089f5e;
        transition: all 400ms ease-in-out;
        margin:0;
        margin-bottom:0.5rem;
        width:100%;
    }
    li {
        font-family: 'Noto Sans', sans-serif;
        padding: 0.5rem;
        background-color: #fffa93;
        border-radius: 0.5rem;
        box-shadow: 2px 2px 0 #089f5e;
        transition: all 400ms ease-in-out;
        margin:0;
        margin-bottom:0.2rem;
        width:60%;
    }
    ul {
        margin:0;
    }
    @media only screen and (max-width: 400px) {
        p {
            font-size: 0.8rem;
        }
        li {
            font-size: 0.8rem;
        }
    }
</style>