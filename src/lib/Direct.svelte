<script>
    export let content = ""
    export let showDirect = true

    export let play = false

    function close() {
        play = true
        showDirect = false
    }
</script>

<div class="direct">
    <p>{@html content}</p>
    <div class="close" onclick={close}>X</div>
</div>


<style>
    .direct {
        position:absolute;
        width:60%;
        max-width:200px;
        font-family: 'Noto Sans', sans-serif;
        font-size:0.8rem;
        background-color: rgba(0,0,0,0.7);
        color:white;
        border-radius:0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin-top:40%; */
    }
    .direct > p {
        margin:1rem;
        text-align: center;
    }
    .close {
        position:absolute;
        top:0.5rem;
        right:0.5rem;
        cursor: pointer;
    }
</style>