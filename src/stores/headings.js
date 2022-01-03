import { writable } from 'svelte/store';

export const captions = writable({
    home: 'This is a personal project of mine! I created my own API and built this website with React! Then, I decided that I would like to remake it in Svelete!',
    all: "Can't get enough of the jokes? Here's some more!",
    random: 'Here is a random joke:',
    about: 'This project was intended to be a fun project for me to use the concepts I have learned with Javascript. I created my own API and built this website with Svelte!',
});

export const caption = writable('This is a personal project of mine! I created my own API and built this website with React! Then, I decided that I would like to remake it in Svelete!');
export const heading = writable('Welcome to the Dad-a-Base!')