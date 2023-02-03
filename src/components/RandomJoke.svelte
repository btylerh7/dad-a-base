<script>
    async function getRandom() {
        const response = await fetch('https://dad-joke-api.onrender.com/api/random');
        const randomJoke = await response.json();
        return randomJoke;
    }
    let promise = getRandom();


</script>

<div>
    {#await promise}
        <p>Loading...</p>  
    {:then joke} 
            <div class="card">
                <p>{joke.description}</p>
            </div>
    {/await}

</div>
