<script>
    import Link from './Link.svelte'
    let width;
    let isClicked = false;
    let isHidden = true;

    function handleClick() {
        if (width < 500) {
        isClicked === false ? isClicked = true : isClicked = false;
        isClicked === false ? isHidden = true : isHidden = false;
        }
    }
</script>

<svelte:window bind:outerWidth={width}/>

<nav class="navbar">
    {#if width < 500}
        <p on:click={handleClick} class="material-icons hamburger {isHidden === true ? 'purple' : 'white'}">{isClicked === true ? 'menu_open' : 'menu'}</p>

    {/if}
    <ul on:click={handleClick} class="navlist {width < 500 ? "mobile" : 'desktop'} {isHidden === true && width < 500 ? 'hidden' : ''}">
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
        text-align: center;
        font-weight: 700;
    }
    .desktop {
        grid-template-columns: repeat(4, 1fr);
        color: var(--main-purple);
    }
    .mobile {
        grid-template-columns: 1fr;
        color: var(--light-text);
        background-color: var(--main-purple);
    }
    .hamburger {
        display: flex;
        font-weight: 700;
        justify-content: flex-end;
        padding: 1rem;
    }
    .hidden {
        display: none;
    }
    .purple {
        color: var(--main-purple);
    }
    .white {
        color: var(--light-text);
        background-color: var(--main-purple);
    }
</style>