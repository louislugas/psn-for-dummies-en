<script>
    import Intro from './Intro.svelte';
    import Sector from '$lib/Sector.svelte';
    import Matching from '$lib/Matching.svelte'
    import Choice from '$lib/Choice.svelte'
    import TataRuang from '$lib/TataRuang.svelte'
    import Protes from '$lib/Protes.svelte'
    import BacaArtikel from '$lib/BacaArtikel.svelte'
    import Fact from './Fact.svelte'
    import Resume from './Resume.svelte'
    import Infog from './Infog.svelte'
    import Aspirasi from './Aspirasi.svelte'
    import GameOver from './GameOver.svelte'

    import Dialog from './Dialog.svelte'
    import LabelHijau from './LabelHijau.svelte';

    export let index

    let sector = "a", jurus = "j", allowClick, match, area, time = 30, state = 0
</script>

<div class="screen">
    {#if index == 3}
        <!-- PILIH SEKTOR -->
        <Sector bind:index bind:sector/>

    {:else if index == 4}
        <!-- KRITERIA PSN -->
        <Infog {index}/>

    {:else if index >= 5 && index <= 6}
        <!-- MENCOCOKAN DOKUMEN -->
        <Matching bind:index bind:match/>

    {:else if index == 7}
        <!-- MEMILIH OPSI LAHAN -->
        <TataRuang bind:index bind:allowClick bind:area/>

    <!-- {:else if index == 9} -->
        <!-- KOREKSI OPSI LAHAN -->
        <!-- <Choice bind:index bind:area bind:allowClick />  -->

    {:else if index == 8}
        <!-- SOSIALISASI PROYEK -->
        <Choice bind:index/>

    {:else if index >= 9 && index <= 10}
        <!-- MENDENGARKAN MASYARAKAT -->
        <Aspirasi bind:index bind:time/>

    {:else if index == 11}
        <!-- PROTES MASYARAKAT -->
        <Protes bind:index bind:state/>

    {:else if index == 12}
        <!-- JURUS CUCI DOSA 1 -->
        <Intro bind:index/>

    {:else if index == 13}
        <!-- JURUS CUCI DOSA 2 -->
        <Sector bind:index bind:jurus/>

    {:else if index == 14}
        <!-- RESUME -->
        <Resume bind:index bind:sector bind:area bind:state bind:jurus/>
    
    {:else if index == 23 || index == 24}
        <!-- GAME OVER -->
        <GameOver bind:index/>
    {/if}
</div>

{#if index != 14}
    <Dialog bind:index bind:match bind:area bind:time/>
{/if}

<style>
    .screen {
        width:100%;
        background-color: lightyellow;
        /* aspect-ratio: 1; */
        height:calc(100% - 150px);
        margin-top: 0;
    }

    @media only screen and (max-width: 400px) {
        .screen {
            height:calc(100% - 150px);
        }
    }
    
</style>