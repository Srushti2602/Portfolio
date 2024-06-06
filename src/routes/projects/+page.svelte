<script>
    import { createEventDispatcher } from 'svelte';
    import FolderPage from './FolderPage.svelte';
    import Hardware from './hardware/+page.svelte';
    import CloudComputingProjects from './cloud-computing/+page.svelte';
    import DeepLearningProjects from './deep-learning/+page.svelte';
    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
    import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
    import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
    import FaWindows from 'svelte-icons/fa/FaWindows.svelte';
    import FaHome from 'svelte-icons/fa/FaHome.svelte';
    import { modalOpened } from '$lib/store';
    import { onMount } from 'svelte';


    let currentCategory = null;
    let showWindowsModal = false;

    const categories = [
        { name: 'hardware', id: 'hardware' },
        { name: 'Cloud Computing', id: 'cloud-computing' },
        { name: 'Deep Learning', id: 'deep-learning' }
    ];

    const openEmailModal = () => {
        modalOpened.set(true);
    };

    const openWindowsModal = (event) => {
        event.stopPropagation();
        showWindowsModal = true;
    };

    const closeWindowsModal = (event) => {
        if (!event.target.closest('.windows-start-menu')) {
            showWindowsModal = false;
        }
    };

    const redirectToHome = () => {
        window.location.href = '/';
    };

    onMount(() => {
        document.addEventListener('click', closeWindowsModal);
        window.onpopstate = () => {
            const path = window.location.pathname.split('/');
            if (path.length > 2 && path[2]) {
                currentCategory = path[2];
            } else {
                currentCategory = null;
            }
        };
        return () => {
            document.removeEventListener('click', closeWindowsModal);
        };
    });

    function handleFolderClick(event) {
        currentCategory = event.detail.id;
        history.pushState({}, '', `/projects/${currentCategory}`);
    }
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<main>
    {#if !currentCategory}
        <FolderPage {categories} on:clickFolder={handleFolderClick} />
    {:else if currentCategory === 'hardware'}
        <Hardware />
    {:else if currentCategory === 'cloud-computing'}
        <CloudComputingProjects />
    {:else if currentCategory === 'deep-learning'}
        <DeepLearningProjects />
    {/if}
</main>

<footer>
    <div class="footer-icons">
        <div
            role="button"
            tabindex="0"
            on:keypress={redirectToHome}
            on:click={redirectToHome}
        >
            <div class="footer-icon">
                <FaHome />
            </div>
        </div>
        <div
            role="button"
            tabindex="0"
            on:keypress={openWindowsModal}
            on:click={openWindowsModal}
        >
            <div class="footer-icon">
                <FaWindows />
            </div>
        </div>
        <div
            role="button"
            tabindex="0"
            on:keypress={openEmailModal}
            on:click={openEmailModal}
        >
            <div class="footer-icon">
                <FaEnvelope />
            </div>
        </div>

        <a
            href="https://github.com/Srushti2602"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div class="footer-icon">
                <FaGithub />
            </div>
        </a>
        <a
            href="https://www.linkedin.com/in/srushti-jagtap-08a10122b"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div class="footer-icon">
                <FaLinkedin />
            </div>
        </a>
    </div>

    {#if showWindowsModal}
        <div class="windows-start-menu">
            <div class="left-panel">
                <a href="/" class="menu-item">File Explorer</a>
                <a href="/" class="menu-item">Settings</a>
                <a href="/" class="menu-item">Power</a>
                <a href="/" class="menu-item">All apps</a>
            </div>
            <div class="right-panel">
                <div class="grid">
                    <a href="https://www.google.com/search?client=safari&rls=en&q=skype&ie=UTF-8&oe=UTF-8" class="tile">
                        <img src="src/pictures/skype.svg" alt="Skype"/>
                        <span>Get Skype</span>
                    </a>
                    <a href="https://maps.google.com" class="tile">
                        <img src="src/pictures/map-solid.svg" alt="Maps"/>
                        <span>Maps</span>
                    </a>
                    <a href="https://www.google.com/search?q=call+online%C2%A0&client=safari&sca_esv=986cfd32cb66a37f&rls=en&ei=LAZZZpyrC7-uiLMPoua4wAs&ved=0ahUKEwic8b6zvraGAxU_F2IAHSIzDrgQ4dUDCA8&uact=5&oq=call+online%C2%A0&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIg1jYWxsIG9ubGluZcKgMggQABiABBixAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEi-M1COF1iaL3ABeAGQAQCYAYMDoAHmC6oBBzYuNS4wLjG4AQPIAQD4AQGYAg2gAtkMqAIUwgITEAAYgAQYQxi0AhiKBRjqAtgBAcICGRAAGAMYtAIY5QIY6gIYiwMYjAMYjwHYAQLCAh8QLhgDGLQCGOUCGKgDGOoCGJoDGIsDGIwDGI8B2AECwgIiEC4YAxi0AhjlAhioAxjqAhiaAxiLAxibAxiMAxiPAdgBAsICEBAAGIAEGLEDGEMYgwEYigXCAgoQABiABBhDGIoFwgINEAAYgAQYsQMYQxiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgILEC4YgAQYsQMYgwHCAhQQLhiABBixAxjRAxiDARjUAhjHAcICEBAuGIAEGLEDGEMYgwEYigXCAg0QLhiABBixAxhDGIoFwgIKEC4YgAQYQxiKBcICCBAuGIAEGLEDwgIfEC4YgAQYsQMYQxiDARiKBRiXBRjcBBjeBBjgBNgBA8ICDhAAGIAEGLEDGIMBGIoFmAMQugYECAEYB7oGBggCEAEYCroGBggDEAEYFJIHBzYuNi40LTGgB_hv" class="tile">
                        <img src="src/pictures/user-solid.svg" alt="People"/>
                        <span>People</span>
                    </a>
                    <a href="https://www.google.com/search?client=safari&rls=en&q=online+calculator&ie=UTF-8&oe=UTF-8" class="tile">
                        <img src="src/pictures/calculator-solid.svg" alt="Calculator"/>
                        <span>Calculator</span>
                    </a>
                    <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.timeanddate.com/worldclock/&ved=2ahUKEwjqu-7ewLaGAxVWElkFHcfPB9YQFnoECAgQAQ&usg=AOvVaw2R8Qva8AOfupFO8EaLJof4" class="tile">
                        <img src="src/pictures/clock-solid.svg" alt="Alarms & Clock"/>
                        <span>Alarms & Clock</span>
                    </a>
                    <a href="https://mail.google.com/mail/u/0/" class="tile">
                        <img src="src/pictures/envelope-solid.svg" alt="Mail"/>
                        <span>Mail</span>
                    </a>
                    <a href="https://www.netflix.com/browse/genre/34399" class="tile">
                        <img src="src/pictures/map-solid.svg" alt="Movies & TV"/>
                        <span>Movies & TV</span>
                    </a>
                    <a href="https://music.apple.com/us/browse" class="tile">
                        <img src="src/pictures/map-solid.svg" alt="Groove Music"/>
                        <span>Groove Music</span>
                    </a>
                    <a href="https://www.xbox.com/en-US" class="tile">
                        <img src="src/pictures/map-solid.svg" alt="Xbox"/>
                        <span>Xbox</span>
                    </a>
                </div>
            </div>
        </div>
    {/if}
</footer>

<style>
    main {
        text-align: center;
        padding: 0;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        height: calc(100vh - 40px); /* Adjusted height */
        justify-content: center;
        align-items: center;
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

    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        color: white;
        padding: 5px;
        background-color: #001f3f;
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;
        height: 40px;
    }

    .footer-icons {
        display: flex;
        gap: 20px;
        font-size: 30px;
    }

    .footer-icon {
        cursor: pointer;
        transition: color 0.2s ease-in-out;
        width: 30px;
        height: 40px;
    }

    .footer-icon:hover {
        color: #ca3c25;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .windows-start-menu {
        display: flex;
        flex-direction: row;
        background-color: #262626;
        color: white;
        width: 600px;
        height: 400px;
        border-radius: 10px;
        position: fixed;
        bottom: 50px;
        left: 20px;
        z-index: 1000;
    }

    .left-panel {
        width: 200px;
        background-color: #1b1b1b;
        display: flex;
        flex-direction: column;
        padding: 10px;
        gap: 10px;
    }

    .right-panel {
        flex-grow: 1;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }

    .tile {
        background-color: #333;
        padding: 20px;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
        color: white;
        text-decoration: none;
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }

    .tile:hover {
        transform: scale(1.05);
        opacity: 1;
    }

    .tile img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;
    }

    .tile:hover img {
        opacity: 0.8;
    }

    .tile span {
        position: relative;
        z-index: 1;
    }

    .modalContainer {
        text-align: center;
        color: black;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        width: 300px;
    }

    .projectContainer {
        width: 100%;
        max-width: 900px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        text-align: center;
        padding: 1em;
        margin: 0 auto;
        text-align: center;
    }

    .note {
        opacity: 0.5;
        margin: 0;
        max-width: 900px;
        text-align: left;
    }

    .projects {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 40px;
        margin-top: 30px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .techsContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .techs {
        display: flex;
        gap: 5px;
    }

    .project {
        text-align: start;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        color: white;
        background: #111;
        padding: 2rem;
        width: 100%;
        border-radius: 5px;
        transition: transform 0.2s ease-in-out;
        border-radius: 25px;
    }

    .project p {
        font-weight: 100;
        color: #708090;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border: 2px solid white;
        padding: 10px;
    }

    @media (min-width: 900px) {
        .projectContainer {
            padding: 0;
        }

        .projects > h1 {
            font-size: 48px;
            margin: 50px 0 0 0;
        }

        .projects {
            grid-template-columns: 1fr;
        }

        .projects .project {
            min-height: 200px;
        }

        .button {
            max-width: 200px;
        }
    }

    @media (min-width: 600px) {
        .projects {
            grid-template-columns: 1fr;
        }
    }
</style>
