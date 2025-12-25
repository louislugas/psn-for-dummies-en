<script>
    export let index, area = 0, time = 30
</script>


{#if index >= 1 && index <= 2} <!-- NGOBROL -->
    <img src="./images/avatar-ngobrol.png"  alt="Avatar Ngobrol">

{:else if index >= 3 && index <= 11} <!-- PEJABAT ANONIM -->
    <img src="./images/avatar-pejabat.png" alt="Avatar Pejabat">

{:else if index == 12} <!-- NGOBROL -->
    <img src="./images/avatar-ngobrol.png"  alt="Avatar Ngobrol">

{:else if index == 13} <!-- PEJABAT ANONIM -->
    <img src="./images/avatar-pejabat.png" alt="Avatar Pejabat">

{/if}

<style>
    img {
        width:100%;
        height:100%;
        /* background-color:indianred; */
        object-fit: contain;
        object-position: center bottom;
    }
</style>