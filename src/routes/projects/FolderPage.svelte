<script>
    import { createEventDispatcher } from 'svelte';

    export let categories;
    const dispatch = createEventDispatcher();

    function handleClick(category) {
        dispatch('clickFolder', { id: category.id });
    }
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<main>
    <h1>Projects</h1>
    <div class="folderContainer">
        {#each categories as category}
            <div class="folder" on:click={() => handleClick(category)} role="button" tabindex="0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#FFD43B" d="M464 128H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"/>
                </svg>
                <span>{category.name}</span>
            </div>
        {/each}
    </div>
</main>

<style>
    main {
        text-align: center;
        padding: 2rem;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .folderContainer {
        position: absolute;
        bottom: 50px;
        left: 50px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .folder {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: inherit;
        width: 100px;
        text-align: center;
        cursor: pointer;
    }

    .folder svg {
        width: 80px;
        height: 80px;
        margin-bottom: 0.5rem;
    }

    .folder span {
        font-size: 1rem;
    }
</style>
