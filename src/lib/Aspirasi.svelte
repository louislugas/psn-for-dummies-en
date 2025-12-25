<script>
    import beep from "$lib/audio/psn-audio-beep.mp3"
	import ButtonAudio from '$lib/ButtonAudio.svelte'
    
	export let index, time = 30

    let beepAudio

	let play = false

	function playAudio() {
        play = true
        setTimeout(() => {play = false},100)
    }

	let start = false
	let people = []

	for(let i = 0; i < 20; i++ ) {
		people.push({
			status:"idle",
			type:Math.floor(Math.random()*2)
			})
	}

	let timerInterval
	let askInterval
    let solveTimer
    let processTime = 4
    let processTimer

    let isProcess = false
    let showButton = false
	
	function startTimer() {
		if (!start) {
			start = true
			timerInterval = setInterval(() => {
				if (time != 0) {
					if (time <= 10) {
						beepAudio.play()
					}		
					time--	
				}
			},1000)
			askInterval = setInterval(() => {
				let r = Math.floor(Math.random()*people.length)
				while (people[r].status == "idle") {
					people[r].status = "ask"
				}
			},1500)
		}
	}

	function solve(e) {
		playAudio()
		let i = e.target.dataset.id
		if (start) {
			if(people[i].status == "ask" && isProcess == false) {
                isProcess = true
				people[i].status = "process"
                processTimer = setInterval(() => {
                    processTime -= 0.01
                }, 10)
                solveTimer = setTimeout(() => {
                    people[i].status = "solved"
                    isProcess = false
                    clearInterval(processTimer)
                    processTime = 4
                }, 4000)
			}
		}
	}

    function skip() {
        clearInterval(timerInterval)
		clearInterval(askInterval)
        time = 30
        isProcess = false
        clearTimeout(solveTimer)
        people.forEach(d => d.status = "idle")
        index = 11
    }
	
	$: if (time == 0) {
		clearInterval(timerInterval)
		clearInterval(askInterval)
		setTimeout(() => {
			time = 30
            isProcess = false
            clearTimeout(solveTimer)
            people.forEach(d => d.status = "idle")
            index = 23
			start = false
		},500)
	}

    $: if (time <= 5) {
        showButton = true
    }

	let imgW = 100
</script>

<audio bind:this={beepAudio} src={beep}></audio>
<ButtonAudio {play} />
<section>
	<h1 
	style:color="{time > 3 ? "black" : "red"}">00:{time >= 10 ? time : "0" + time}</h1>
	<svg>
		{#each people as p,i}
		{#if p.type == 0}
			<g
				on:click={solve}
			>
				{#if p.status == "ask"}
					<image w={70} h={200}
						x="{(i%5)*(0.7*imgW)-16}"
						y={Math.floor(i/5)*50+46.66}
						width={imgW}
						height="136.67"
						id={i}
						status={p.status}
						href="./images/petani-02.svg"
						data-id={i}
    					data-status={status}
					/>
				{:else if p.status == "process"}
					<image w={100} h={200}
						x="{(i%5)*(0.7*imgW)-16}"
						y={Math.floor(i/5)*50}
						width={imgW}
						height="183.33"
						href="./images/petani-03.svg"
					/>
				{:else if p.status == "idle" || p.status == 
				"solved"}
					<image w={100} h={200}
						x="{(i%5)*(0.7*imgW)-16}"
						y={Math.floor(i/5)*50+86.66}
						width={imgW}
						height="96.67"
						href="./images/petani-01.svg"
						style:pointer-event="none"
					/>
				{/if}
			</g>
		{:else if p.type == 1}
		<g on:click={solve}>
			{#if p.status == "ask"}
				<image w={100} h={200}
						x="{(i%5)*(0.7*imgW)-16}"
						y={Math.floor(i/5)*50+46.66}
						width={imgW}
						height="136.67"
						id={i}
						status={p.status}
						href="./images/petani-05.svg"
						data-id={i}
    					data-status={status}
					/>
			{:else if p.status == "process"}
				<image w={100} h={200}
						x="{(i%5)*(0.7*imgW)-16}"
						y={Math.floor(i/5)*50}
						width={imgW}
						height="183.33"
						href="./images/petani-06.svg"
					/>
			{:else if p.status == "idle" || p.status == 
			"solved"}
				<image w={100} h={200}
					x="{(i%5)*(0.7*imgW)-16}"
					y={Math.floor(i/5)*50+86.66}
					width={imgW}
					height="96.67"
					href="./images/petani-04.svg"
					style:pointer-event="none"
				/>
			{/if}
		
		</g>
		{/if}
			<!-- <rect 
				x="{(i%5)*20+1.4}%" 
				y={Math.floor(i/5)*50+25} r="20"
				width="60"
				height="120"
				fill={p.status == "ask" ? "red" : p.status == "process" ? "yellow" : p.status == "solved" ? "green" : "transparent"}
				stroke="black"
				data-id={i}
				data-status={p.status}
				on:click={solve}
				></rect> -->
			<circle 
				fill="lightyellow" 
				stroke="red"
				cx="{(i%5)*70+35}"
				cy={Math.floor(i/5)*50-12}
				r="15"
				stroke-width="5"
				opacity={p.status == "process" ? 1 : 0} 
				stroke-dasharray="{Math.PI*30}" 
				stroke-dashoffset="{Math.PI*30*((4-processTime)/4)}"
				transform="rotate(-90)"
				transform-origin="{(i%5)*70+35} {Math.floor(i/5)*50-12}"
			></circle>
			<text 
			x="{(i%5)*20+10}%" 
			y={Math.floor(i/5)*50-10} 
			opacity={p.status == "process" ? 1 : 0} 
			fill="black" text-anchor="middle" dominant-baseline="middle" pointer-events="none"
			font-family="Lexend Giga">
			{Math.floor(processTime)}</text>
		{/each}
	</svg>
	
	<button on:click={startTimer} disabled={start} style:display={start ? 'none' : 'block'}>
		Start
	</button>
	{#if showButton}
	<button on:click={skip}>
		Too hard!<br>Let’s skip this!
	</button>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-top: 1rem;
		align-items: center;
		height:90%;
	}
	svg {
		width:350px;
		height:300px;
		/* border:1px solid black; */
		overflow: visible;
	}
	h1 {
		font-family: "Lexend Giga", sans-serif;
		margin: 0;
		font-size: 2rem;
	}
	button {
        font-family: 'Noto Sans', sans-serif;
        background-color: #FDF10F;
        border-radius: 0.5rem;
        font-weight: 600;
        padding:0.3rem;
        padding-left:0.8rem;
        padding-right:0.8rem;
	}
</style>
