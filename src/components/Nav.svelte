<script>
    import Link from './Link.svelte'

</script>

<nav class="navbar">
    <ul class="navlist">
        <Link icon='home' current_heading="Welcome to the Dad-a-Base!" text="Home" current_caption='home'/>
        <Link icon='explore' current_heading="All Jokes" text="All Jokes" current_caption='all'/>
        <Link icon='shuffle_on' current_heading="Random Joke" text="Random Joke" current_caption='random'/>
        <Link icon='contact_page' current_heading="About This Project" text="About" current_caption='about'/>
    </ul>
</nav>

<style>
    .navbar {
        box-shadow: 0px 5px 8px -9px rgba(0,0,0,0.75);
        margin-bottom: 2rem;
        min-height: 3rem;
    }
    .navlist {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(4, 1fr);
        text-align: center;
        color: var(--main-purple);
        font-weight: 700;
    }
</style>