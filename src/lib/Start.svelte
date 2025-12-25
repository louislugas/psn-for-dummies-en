<script>
    export let index

    let width
</script>

<section bind:clientWidth={width}>
    <div class="title">
        <div class="trapezoid-2"
            style:width="0"
            style:border-left="#089f5e solid {width}px"
        ></div>
        <div class="trapezoid"
            style:width="0"
            style:border-left="black solid {width}px"
        ></div>
        <h1 class="title-text-1" id="t1">PSN</h1>
        <h1 class="title-text-2" id="t2">for</h1>
        <h1 class="title-text-2" id="t3">DUMMIES</h1>
    </div>
    <div class="bottom">
        <div class="left">
            <img src="./images/prabowo-subianto.png" alt="Prabowo Subianto - PSN for Dummies">
        </div>
        <div class="center">
            <button on:click={() => {index = 1}}>PLAY</button>
        </div>
        <div class="right">
            <img src="./images/joko-widodo.png" alt="Joko Widodo - PSN for Dummies">
        </div>
        
    </div>
    
    
</section>

<style>
    section {
        width:100%;
        height:100%;
        background-color:#fdf10f;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .title {
        height:40%;
        background-color: #000000;
        width:100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    h1 {
        text-align: center;
        margin:0;
        z-index:10;
    }
    .title-text-1 {
        font-family:"Lexend Giga", sans-serif;
        color:white;
        font-size:8rem;
        line-height: 8rem;
        font-weight: 900;
    }
    .title-text-2 {
        font-family: "Atma", sans-serif;
        color:#fdf10f;
        font-weight: 400;
    }
    #t2 {
        font-size: 3rem;
        line-height: 3rem;
    }
    #t3 {
        font-size:6rem;
        line-height: 6rem;
    }
    .trapezoid {
        height:0px;
        border-right: #089f5e solid 0px;
        border-top: yellow solid 0px;
        border-bottom:  transparent solid 100px;
        position:absolute;
        top:100%;
    }
    .trapezoid-2 {
        height:0px;
        border-right: #089f5e solid 0px;
        border-top: #089f5e solid 10px;
        border-bottom:  transparent solid 100px;
        position:absolute;
        top:100%;
    }
    .bottom {
        height:60%;
        width:100%;
        display: flex;
        justify-content: center;
    }
    .left, .right {
        display: flex;
        justify-content: center;
        align-items: center;
        width:30%;
        height:100%;
        align-items: flex-end;
        pointer-events: none;
    }
    img {
        max-width:240px;
    }
    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button {
        font-family: "Atma", sans-serif;
        font-size:1.5rem;
        background-color:#fdf10f;
        border-radius: 1rem;
        padding-left: 2rem;
        padding-right:2rem;
        border: black solid 3px;
    }
    @media only screen and (max-width: 400px) {
        .title-text-1 {
            font-size:6rem;
            line-height: 7rem;
        }
        #t2 {
            font-size: 2rem;
            line-height: 3rem;
        }
        #t3 {
            font-size:4rem;
            line-height: 5rem;
        }
        button {
            font-size:1.5rem;
            font-weight: 500;
            border-radius: 1rem;
            padding-left: 1rem;
            padding-right:1rem;
        }
        img {
            width:240px
        }
    }
</style>