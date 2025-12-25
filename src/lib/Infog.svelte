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

<section>
        {#if index == 4}
            <!-- <h3>Kriteria Dasar</h3> -->
            <p in:fly={{x:-100}} style:transform="translateX({show? 0 : -100}px)"
            style:opacity="{show ? 1 : 0}">
            Masuk rencana pembangunan
            </p>
            <p in:fly={{x:-100, delay:400}}
            style:transform="translateX({show? 0 : -100}px)"
            style:opacity="{show ? 1 : 0}"
            style:transition-delay="400ms">
            Cocok dengan tata ruang wilayah
            </p>
            <p in:fly={{x:-100, delay:400}}
            style:transform="translateX({show? 0 : -100}px)"
            style:opacity="{show ? 1 : 0}"
            style:transition-delay="800ms">
            Berdampak ekonomi dan sosial
            </p>
            <p in:fly={{x:-100, delay:400}}
            style:transform="translateX({show? 0 : -100}px)"
            style:opacity="{show ? 1 : 0}"
            style:transition-delay="1200ms">
            Sinkron dengan proyek infrastruktur lain
            </p>
            <p in:fly={{x:-100, delay:400}}
            style:transform="translateX({show? 0 : -100}px)"
            style:opacity="{show ? 1 : 0}"
            style:transition-delay="1600ms">
            Ada studi kelayakan
            </p>
            <p in:fly={{x:-100, delay:400}}
            style:transform="translateX({show? 0 : -100}px)"
            style:opacity="{show ? 1 : 0}"
            style:transition-delay="2000ms">
            <strong>Duit investasi >Rp500 miliar</strong>
            </p>
        <!-- {:else if index == 4}
            <h3>Kriteria Strategis</h3>
            <p in:fly={{x:-100}}>Berdampak buat ekonomi, kesejahteraan sosial, dan keamanan</p>
            <p in:fly={{x:-100, delay:400}}>Sinkron dengan proyek infrastruktur lain</p>
        {:else if index == 5}
            <h3>Kriteria Operasional</h3>
            <p in:fly={{x:-100}}>Ada studi kelayakan</p>
            <p in:fly={{x:-100, delay:400}}>Duit investasi >Rp500 miliar</p> -->
        {/if}
</section>

<style>
    section {
        width:90%;
        margin:0 auto;
        margin-top:4rem;
    }
    h3 {
        font-family: 'Lexend Giga', sans-serif;
    }
    p {
        font-family: 'Noto Sans', sans-serif;
        padding: 0.5rem;
        background-color: #FDF10F;
        border-radius: 0.5rem;
        box-shadow: 2px 2px 0 #089f5e;
        transition: all 400ms ease-in-out;
    }
</style>