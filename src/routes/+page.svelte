<script>

	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaWindows from 'svelte-icons/fa/FaWindows.svelte';
	import { modalOpened } from '$lib/store';
	import { onMount } from 'svelte';

	let showWindowsModal = false;

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

	onMount(() => {
		document.addEventListener('click', closeWindowsModal);
		return () => {
			document.removeEventListener('click', closeWindowsModal);
		};
	});
</script>

<svelte:head>
	<title>Srushti Jagtap - Main Page</title>
</svelte:head>

<main>
	<h1>Hi!✋ <br /> I'm Srushti Jagtap 💻 computer engineer currently pursuing Master's in Computer Engineering from New York University</h1>
	<div class="desktop-folders">
		<a href="/" class="folder">
			<div class="folder-icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M464 128H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"/></svg>
			</div>
			<span>Home</span>
		</a>
		<a href="/projects" class="folder">
			<div class="folder-icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M464 128H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"/></svg>
			</div>
			<span>Projects</span>
		</a>
		<a href="/about" class="folder">
			<div class="folder-icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M464 128H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"/></svg>
			</div>
			<span>About</span>
		</a>
		<a href="/blog" class="folder">
			<div class="folder-icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M464 128H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"/></svg>
			</div>
			<span>Experiences</span>
		</a>
	</div>
</main>

<footer>
	<div class="footer-icons">
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
			aria-label="Linkedin"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="footer-icon">
				<FaLinkedin />
			</div>
		</a>
	</div>
</footer>

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

<style>
	a {
		color: white;
		text-decoration: none;
	}
	main {
		text-align: center;
		padding: 0;
		margin: 0 auto;
		text-align: center;

		display: flex;
		flex-direction: column;
		height: calc(100vh - 40px); /* Adjusted height */
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-weight: 700;
		text-align: justify;
	}

	main > h1 {
		margin: 50px 10px 0;
		font-size: 36px;
		color: white;
	}

	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		max-width: 200px;
		margin: 50px auto 0;
	}

	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
	}
	.icon:hover {
		color: #ca3c25;
	}

	.desktop-folders {
		display: flex;
		flex-direction: column;
		gap: 20px;
		position: absolute;
		bottom: 50px;
		left: 50px;
	}

	.folder {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 80px;
		height: 110px;
		color: white;
		font-size: 14px;
		text-align: center;
		text-decoration: none;
	}

	.folder-icon {
		width: 80px;
		height: 80px;
	}

	.footer-icons {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		margin: 1px auto 0; /* Adjusted margin */
	}

	.footer-icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 30px; /* Adjusted icon size */
		height: 40px; /* Adjusted icon size */
	}
	.footer-icon:hover {
		color: #ca3c25;
	}

	footer {
		text-align: center;
		color: white;
		padding: 5px; /* Reduced padding */
		background-color: #001f3f; /* Dark blue color */
		width: 100%; /* Full width */
		height: 40px; /* Adjusted height */
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	footer a {
		color: #ff3e00;
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

	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}

	@media (min-width: 600px) {
		main {
			max-width: none;
		}
	}
</style>
