<script>
    export let icon;
    export let text;
    export let current_heading
    export let current_caption;

    import { captions, caption, heading } from '../stores/headings';
    import { isAll, isRandom } from '../stores/jokes';

</script>


<div on:click={() => {
    $caption = $captions[`${current_caption}`];
    $heading = current_heading;
    current_caption === 'all' ? isAll.set(true) : isAll.set(false);
    current_caption === 'random' ? isRandom.set(true) : isRandom.set(false);

}} class="navlist-item">
    <span class='material-icons'>{ icon }</span>
    <li>{ text }</li>
</div>

<style>
    .navlist-item {
        list-style: none; 
        display:flex;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
        justify-content: center;
        padding: 1rem;
        cursor: pointer;
    }

    .navlist-item:hover {
        transition: ease-in .15s;
        background-color: var(--main-purple);
        border-radius: 1rem;
        color: var(--light-text);
        cursor: pointer;
    }
</style>