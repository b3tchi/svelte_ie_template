<script>
    import { onMount } from "svelte";
    let non = [];
    let gettingQuote = false;

    onMount(() => {
        getRandomQuote();
    });
	
    async function getRandomQuote() {
        gettingQuote = true;
        var dte = Date.now();
        const res = await fetch("https://api.quotable.io/random?source=" + dte);
        const resP = await fetch('https://dog.ceo/api/breeds/image/random');
        
        const json = await res.json();
        const jsonP = await resP.json();

        console.log(json)
        console.log(jsonP)

        non = [...non, json];
        gettingQuote = false;
    }
</script>

<div>
    {#each non as {author, content}}
        <p>{content} - {author}</p>
   	{/each}
		<button on:click={getRandomQuote} disabled={gettingQuote}>Get Quote</button>
    {#if gettingQuote}
        <span>Getting Quote...</span>
    {/if}
</div>