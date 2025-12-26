<script>
    import Avatar from "./Avatar.svelte";

    export let index, area = 0, match = false, time = 30

    let visible = false
    let next = false
    let width

    function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		// if (!valid) {
		// 	throw new Error(`This transition only works on elements with a single text node child`);
		// }

		const text = node.textContent
		const duration = text.length / (speed * 0.1)
		
		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t)
				node.textContent = text.slice(0,i)
                if (i < text.length) {
                    next = false
                } else if (i == text.length) {
                    setTimeout(() => {
                        next = true
                    }, 250)
                }
			}
		};
	}

    function goto(n) {
        index = n
    }

    $: if (index) {
        visible = false
        next = false
        setTimeout(() => {
            visible = true
        }, 100)
    }

</script>

<svelte:body bind:clientWidth={width}/>

<div class="dialog">
    <div class="text"
        style:width={() => {
            if (width >= 500) {
                if (index == 1 || index == 2 || index == 12) {
                    return '30%'
                } else {
                    return '60%'
                } 
            } else {
                return '100%'
            }
        }}
    >   
        {#if index == 3} <!-- PILIH SEKTOR -->
            {#if visible}
                <p in:typewriter>
                    Here are some examples of projects that often get the PSN label. There are other kinds too, like solar power plants and the new capital city project, but... <em>ah</em>, never mind. That whole thing’s a bit unclear.<br><br> From the examples above, which one are you interested in?
                </p>
                <!-- {#if next}
                <button on:click={() => goto(4)}>Continue</button>
                {/if} -->
            {/if}

        {:else if index == 4} <!-- INFOGRAFIS STATIS -->
            <p in:typewriter>
                These are the criteria for getting your project onto the PSN list. But don’t stress about them. The only one that really matters is the last point. For someone like you, Rp500 billion is basically pocket change, right?
            </p>
            {#if next}
            <button on:click={() => goto(5)}>Continue</button>
            {/if}

        {:else if index == 5} <!-- MENCOCOKKAN DOKUMEN -->
            <p in:typewriter>
                These are the permits required to get your project approved quickly. <br><br>Let’s see if you can put each permit into the correct category.
            </p>
            <!-- {#if match}
            <button on:click={() => goto(7)}>Continue</button>
            {/if} -->
        {:else if index == 6} <!-- MENCOCOKKAN DOKUMEN -->
            <p in:typewriter>
                There you go! Easy, right?
            </p>
            {#if next}
            <button on:click={() => goto(7)}>Continue</button>
            {/if}

        {:else if index == 7} <!-- PILIH AREA -->
            <p in:typewriter>
                Now click on the map to choose your project’s location.
            </p>

        {:else if index == 8} <!-- SOSIALISASI PROYEK -->
            <p in:typewriter>
                Do you want to hold any public consultations for your project?
            </p>

        {:else if index == 9} <!-- DENGARKAN MASYARAKAT ( INTRO )-->
            {#if time > 10 && time <= 30}
                {#if visible}
                <p in:typewriter>
                    Hmm... Let me see how you explain the pros and cons of this project to the community.
                    <br><br>
                    Click on the residents raising their hands to hear what they have to say.
                </p>
                {/if}
            {:else if time <= 10 && time > 0}
            <p>
                {time} seconds left!
            </p>
            {:else if time == 0}
            <p>
                Time's up!
            </p>
            {/if}

        {:else if index == 11} <!-- PROTES MASYARAKAT -->
            <p in:typewriter>
                You don’t really need to bother with public consultations anyway. If people start protesting, you can just send in the police or military to “secure” the situation.
                <br><br>
                How far do you want the security forces to go?
            </p>
        {:else if index == 13} <!-- JURUS CUCI DOSA 2 -->
            <!-- <h3>Sri Mulyani</h3> -->
            <p in:typewriter>
                Pick the one that suits you best!
            </p>
        {:else if index == 23} <!-- GAME OVER via AMDAL -->
            <!-- <h3>Luhut Binsar Panjaitan</h3> -->
            <p in:typewriter>
                You're taking too long!
            </p>
       
        {/if}
    </div>

    {#if index <= 13}
        <div class="avatar"
            style:width={index == 1 || index == 2 || index == 12 ? '60%' : '40%'}
        >
            <Avatar bind:index bind:area bind:time/>
        </div>
    {/if}

</div>

<style>
    .dialog {
        width:min(500px, 100%);
        background-color: #fdf10f;
        height:150px;
        display: flex;
        position: absolute;
        bottom:0;
        border-top: solid #089f5e 5px;
    }
    .text {
        width:60%;
        /* background-color: aquamarine; */
    }
    .avatar {
        width:40%;
        /* position: absolute; */
        bottom:150px;
        height:100%;
        /* margin-right:1rem; */
        /* bottom:100%;
        right:1rem; */
        pointer-events: none;
    }
    .text > p {
        margin:1rem;
        font-family: "Noto Sans", sans-serif;
        font-size: 0.8rem;
        line-height: 1rem;
        margin-right:0;
        /* margin-top:0; */
    }
    .text > h3 {
        margin-left:1rem;
        margin-bottom:0.5rem;
        margin-top:0.5rem;
        font-family: "Lexend Giga", sans-serif;
    }
    button {
        margin-left:1rem;
        font-family: 'Noto Sans', sans-serif;
        background-color: lightyellow;
        border-radius: 0.5rem;
        font-weight: 600;
        padding:0.3rem;
        padding-left:0.8rem;
        padding-right:0.8rem;
    }

    @media only screen and (max-width: 500px) {
        .dialog {
            position: absolute;
            bottom:0;
            height:180px;
        }
        .text > p {
            font-size:0.8rem;
            line-height: 1rem;
        }
        .text {
            width:100%;
            
        }
        /* .avatar { */
            /* position:absolute; */
            /* width:40%; */
            /* bottom:180px;
            right:0;
        } */
    }
</style>