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
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: #ffffff;
        position: relative;
        display: inline-block;
        letter-spacing: -0.5px;
        line-height: 1.2;
        background: linear-gradient(90deg, #ffffff, #FFD43B);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    h1::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background-color: #FFD43B;
        border-radius: 3px;
    }

    .folderContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    .folder {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        width: 120px;
        transition: all 0.3s ease;
        border-radius: 8px;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        text-align: center;
    }
    
    .folder:hover {
        background-color: rgba(255, 255, 255, 0.05);
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .folder svg {
        width: 64px;
        height: 64px;
        margin-bottom: 10px;
        filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
        transition: all 0.3s ease;
    }
    
    .folder:hover svg {
        transform: scale(1.05);
        filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.3));
    }

    .folder span {
        font-size: 1rem;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: all 0.3s ease;
    }
    
    .folder:hover span {
        color: #FFD43B;
    }
</style>
