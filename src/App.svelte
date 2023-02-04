<script lang="ts">
	import Nav from './components/Nav.svelte';
	import AllJokes from './components/AllJokes.svelte';
	import RandomJoke from './components/RandomJoke.svelte'
	import {caption, heading} from './stores/headings.js';
	import { isAll, isRandom } from './stores/jokes.js';
	let width;
</script>

<svelte:window bind:outerWidth={width}/>

<Nav/>
<main>
	<h1>{$heading}</h1>
	<p>{$caption}</p>
	{#if $isAll}
		<AllJokes />
	{/if}
	{#if $isRandom}
		<RandomJoke />
	{/if}
</main>

<style>
	main {
		display: grid;
		place-items: center;
		gap: 1rem;
		max-width: 80ch;
		margin-inline: auto;
		text-align: center;
	}
</style>