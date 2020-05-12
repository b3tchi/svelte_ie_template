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
        
        const res = await fetch('http://localhost:8001/query?source=' + dte
            , {
                headers: {
                    'Accept': 'application/json'
                    , 'Content-Type': 'application/json'
                
                }
                , method: 'POST'
                , body: JSON.stringify({a: 1, b: 2})
            }
        );
        // const data = await res.json();
        // if (res.ok) {
        //     return data;
        // }else{
        //     throw new Error(data);
        // }
        
        
        // const res = await fetch("https://api.quotable.io/random?source=" + dte);
        // const resP = await fetch('https://dog.ceo/api/breeds/image/random');
        
        const json = await res.json();
        // const jsonP = await resP.json();

        console.log(json)
        // console.log(jsonP)

        // non = [...non, json]; Append JSON    
        non = json;
        gettingQuote = false;
    }
</script>

<div>
    {#each non as {ID , Field1}}
        <p>{ID} - {Field1}</p>
   	{/each}
		<button on:click={getRandomQuote} disabled={gettingQuote}>Get Quote</button>
    {#if gettingQuote}
        <span>Getting Quote...</span>
    {/if}
</div>