<script>
    import Dialog from "./Dialog.svelte";
    import {fly} from 'svelte/transition'

    import {onMount, onDestroy} from 'svelte'

    export let index, next =false

    let visible = false

    let text = [
        {
            t:"You are a business tycoon from a global superpower.",
        },
        {
            t:"During a visit to Indonesia, you receive an invitation to have dinner at the home of a government official. He’s an old acquaintance of yours, with enormous influence in the administration.",
        },
        {
            t:"Over dinner, he asks:",
        },
        {
            t:"You’re not interested in investing in PSN?",
        },
        {
            t:"You reply,:", 
        },
        {
            t:"What’s PSN?",
        }
    ]

    let text2 = [
        {
            t:"Your acquaintance explains:",
        },
        {
            t:"PSN stands for <em>Proyek Strategis Nasional</em>, or National Strategic Projects in English.",
        },
        {
            t:"The whole PSN framework was introduced by former President Joko Widodo. Over his 10 years in power, Jokowi overhauled numerous regulations so that projects with the PSN label could move forward with as few obstacles as possible. Bottom line: the government is ready to mobilize the entire state apparatus to back your project."
        }, 
        {
            t:"Now President Prabowo Subianto is continuing this PSN framework. As of September 2025, there are already 250 projects and programs on the PSN list."
        },
        {
            t:"Intrigued, you ask:"
        },
        {
            t:"So how do I get my own PSN project?"
        }
    ]

    let text3 = [
        {
        t:"You’re starting to feel confident about investing in PSN. But something still bothers you.",
        },
        {
        t:"You remember reading news about how PSN projects in Indonesia have triggered environmental damage, land conflicts, and human rights violations.",
        },
        {
        t:"You ask your acquaintance what he thinks. He quickly replies:",
        },
        {
        t:"Easy"
        }
    ]

    function typewriter(node, { delay = 0, speed = 10 }) {
        const textNodes = getAllTextNodes(node);
        if (!textNodes.length) {
            throw new Error(`This transition only works on elements with text nodes`);
        }

        let totalLength = 0;
        const ranges = textNodes.map(textNode => {
            const range = [totalLength, totalLength + textNode.textContent.length];
            totalLength += textNode.textContent.length;
            const text = textNode.textContent;
            textNode.textContent = '';
            return { textNode, range, text };
        });

        let currentRangeIndex = 0;
        function getCurrentRange(i) {
            while (ranges[currentRangeIndex].range[1] < i && currentRangeIndex < ranges.length) {
                const { textNode, text } = ranges[currentRangeIndex];
                textNode.textContent = text;		// finish typing up the last node
                currentRangeIndex++;
            }
            return ranges[currentRangeIndex];
        }
        const duration = totalLength * speed;

        return {
            delay,
            duration,
            tick: t => {
                const progress = ~~(totalLength * t);
                const { textNode, range, text } = getCurrentRange(progress);
                const [start, end] = range;
                const textLength = ((progress - start) / (end - start)) * text.length;
                textNode.textContent = text.slice(0, textLength);
            },
        };
    }

    function getAllTextNodes(node) {
        if (node.nodeType === 3) {
            return [node];
        } else if (node.hasChildNodes()) {
            let list = [];
            for (let child of node.childNodes) {
                getAllTextNodes(child).forEach(textNode => list.push(textNode));
            }
            return list;
        }
        return [];
    }


    $: if (index) {
        next = false
        visible = false
        setTimeout(() => {
            visible = true
        }, 100)
    }

    let d = 20

</script>
<section>
    {#if index == 1}
        {#if visible}
        <div class="text" in:typewriter>
            <p>{text[0].t}</p>
            <p>{text[1].t}</p>
            <p>{text[2].t}</p>
        </div>

        <div class="dialog-container left">
            <p class="dialog" in:fly={{x:-100, delay:3300}}>{text[3].t}</p>
        </div>
        <br>
        <div class="text" in:typewriter={{delay:4100}}>
            <p>{text[4].t}</p>
        </div>

        <div class="dialog-container right">
            <p class="dialog" 
            in:fly={{x:500, delay:4700}}
            on:introend={() => {setTimeout(() => {next = true}, 500)}}>{text[5].t}</p>
        </div>

        {/if}
        {#if next}
        <button on:click={() => {index++}}>CONTINUE</button>
        {/if}

    {:else if index == 2}
        {#if visible}
            <p in:typewriter>{text2[0].t}</p>
            <div class="dialog-container left">
                <p  class="dialog"in:fly={{x:-100, delay:400}}>{text2[1].t}</p>
            </div>
            <div class="dialog-container left">
                <p class="dialog" in:fly={{x:-100,delay:1000}}>{text2[2].t}</p>
            </div>
            <div class="dialog-container left">
                <p class="dialog" in:fly={{x:-100, delay:1600}}>{text2[3].t}</p>
            </div>

            <br>
            <p in:typewriter={{delay:2000}}>{text2[4].t}</p>

            <div class="dialog-container right">
                <p class="dialog" in:fly={{x:500, end:true, delay:2600}}
                on:introend={() => {setTimeout(() => {next = true}, 500)}}>{text2[5].t}</p>
            </div>

        {/if}

        {#if next}
        <button on:click={() => {index++}}>LANJUT</button>
        {/if}
        

    {:else if index == 12}
        {#if visible}
        <div class="text" in:typewriter>
            <p>{text3[0].t}</p>
            <p>{text3[1].t}</p>
            <p>{text3[2].t}</p>
        </div>
            <div class="dialog-container left">
                <p class="dialog" in:fly={{x:-100, delay:2800}}
                on:introend={() => {setTimeout(() => {next = true}, 500)}}>{text3[3].t}</p>
            </div>      
        {/if}

        {#if next}
        <button on:click={() => {index++}}>LANJUT</button>
        {/if}

    {/if}

    
    <Dialog bind:index/>
</section>

<style>
    section {
        margin-top:2rem;
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: lightyellow;
        overflow: hidden;
    }
    .text {
        display: flex;
        flex-direction: column;
        width:90%
    }
    p {
        font-family: "Noto Sans", sans-serif;
        width:90%;
        color:black;
        font-size: 0.72rem;
        margin-top:0.5rem;
        margin-bottom:0.5rem;
    }
    button {
        margin-top:1rem;
        font-family: "Atma", sans-serif;
        font-size:1rem;
        background-color:#fdf10f;
        border-radius: 0.5rem;
        padding-left: 1rem;
        padding-right:1rem;
        border: black solid 2px;
        font-weight:500;
    }
    .dialog-container {
        display: flex;
        width: 90% ;

    }
    .right {
        text-align: right;
        justify-content: flex-end;
    }
    .dialog {
        transition: all 400ms ease-in-out;
        padding: 0.5rem;
        background-color: #FDF10F;
        border-radius: 0.5rem;
        box-shadow: 2px 2px 0 #089f5e;
        width: 80%;
        margin-bottom: 0.25rem;
        margin-top: 0.25rem;
    }
    .left .dialog {
        background-color: #fcf8b9;
    }   
    @media only screen and (max-width: 400px) {
        p {
            font-size: 0.7rem;
            margin-top:0;
        }
        .dialog {
            width:80%;
        }
    }
    
</style>