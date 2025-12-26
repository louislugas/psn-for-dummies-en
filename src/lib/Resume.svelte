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
        s = "Dam"
    } else if (sector == "jalantol") {
        s = "Toll Road"
    } else if (sector == "kereta") {
        s = "Railway"
    } else if (sector == "bandara") {
        s = "Airport/Port"
    } else if (sector == "energi") {
        s = "Energy Infrastructure"
    } else if (sector == "smelter") {
        s = "Smelter"
    } else if (sector == "kie") {
        s = "Industrial/Economic Zone"
    } else if (sector == "pangan") {
        s = "Food Estate"
    }

    $: if (jurus == "hijau") {
        j = 'Give your project a “green” label'
    } else if (jurus == "nasionalisme") {
        j = "Push a nationalism and sovereignty narrative"
    } else if (jurus == "csr") {
        j = "CSR: hand out food packages, plant trees, etc."
    } else if (jurus == "peneliti") {
        j = "Pay researchers to write studies you want"
    } else if (jurus == "influencer") {
        j = "Pay influencers to promote your project"
    } else if (jurus == "iklan") {
        j = "Buy big ads for positive media coverage"
    }

    $: if (area = 0) {
        a = "Forest Area/Indigenous Land"
    } else if (area = 1) {
        a = "Farmland/Plantation Area"
    } else if (area = 2) {
        a = "Coastal Area"
    } else if (area = 3) {
        a = "Settlement Area"
    }

    $: if (state == 1) {
        p = "Disperse the protesters"
    } else if (state == 2) {
        p = "Arrest the protesters"
    } else if (state == 3) {
        p = "Arrest the journalists"
    }
</script>

<section>
    <h2>Your Project Plan</h2>
    <div>
        <div class="resume">
            <p class="head">Project:</p>
            <p class="content">{s}</p>
        </div>
        <div class="resume">
            <p class="head">Permits:</p>
            <p class="content">Complete</p>
        </div>
        <div class="resume">
            <p class="head">Land Cleared:</p>
            <p class="content">{a}</p>
        </div>
        <div class="resume">
            <p class="head">Crowd Control Method:</p>
            <p class="content">{p}</p>
        </div>
        <div class="resume">
            <p class="head">Whitewashing Move:</p>
            <p class="content">{j}</p>
        </div>
    </div>

    <div class='button-container'>
        <button on:click={() => index = 0}>Finish</button>
        <a class='button' href="https://projectmultatuli.org/proyek-sengsara-nasional/" target="_blank">Read the PSN Series</a>
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
                You’re all set to become a PSN investor!
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