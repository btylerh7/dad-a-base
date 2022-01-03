<script>
    async function getJokes () {
        const response = await fetch('https://shielded-sierra-55191.herokuapp.com/api/jokes');
        const jokes = await response.json();
        return jokes;
    }
    let promise = getJokes();


</script>

<div>
    {#await promise}
        <p>Loading...</p>  
    {:then jokes} 
        {#each jokes as joke }
            <div class="card">
                <p>{joke.description}</p>
            </div>
        {/each}
    {/await}

</div>

<style>
    .card {
        margin: 1rem auto;
        max-width: 500px;
        padding: 1rem;
        border: 1px inset var(--dark-text);
        box-shadow: 1px 1px 1px 1px var(--main-purple);
        border-radius: .5rem;
    }
</style>