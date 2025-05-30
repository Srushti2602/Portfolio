<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaWindows from 'svelte-icons/fa/FaWindows.svelte';
	import FaCode from 'svelte-icons/fa/FaCode.svelte';
	import FaFileAlt from 'svelte-icons/fa/FaFileAlt.svelte';
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

<div class="desktop-container">
	<div class="desktop-wallpaper"></div>
	<main class="responsive-container">
		<div class="intro-section fade-in">
			<h1>Hi! <span class="wave">👋</span></h1>
			<h1 class="main-title">I'm Srushti Jagtap <span class="laptop">💻</span></h1>
			<h2 class="subtitle">I am a full stack developer graduated with a Master's degree in Computer Engineering from New York University</h2>
			<div class="intro-buttons">
				<a href="/projects" class="desktop-btn">View Projects</a>
				<a href="/blog" class="desktop-btn desktop-btn-outline">My Experience</a>
			</div>
		</div>

		<h3 class="section-title fade-in">Quick Access</h3>
		<div class="desktop-folders">
			<a href="/" class="folder fade-in-left delay-100">
				<div class="folder-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M464 128H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"/></svg>
				</div>
				<span>Home</span>
			</a>
			<a href="/projects" class="folder fade-in-left delay-200">
				<div class="folder-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M464 128H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"/></svg>
				</div>
				<span>Projects</span>
			</a>
			<a href="/about" class="folder fade-in-left delay-300">
				<div class="folder-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M464 128H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"/></svg>
				</div>
				<span>About</span>
			</a>
			<a href="/blog" class="folder fade-in-left">
				<div class="folder-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M464 128H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"/></svg>
				</div>
				<span>Experiences</span>
			</a>
		</div>

		<div class="centered-window">
			<div class="window fade-in">
				<div class="window-header">
					<div class="window-controls">
					<div class="window-control close"></div>
					<div class="window-control minimize"></div>
					<div class="window-control maximize"></div>
				</div>
				<div class="window-title">
					<div class="window-title-icon">
						<FaCode />
					</div>
					<span>Welcome to My Portfolio</span>
				</div>
			</div>
			<div class="window-content">
				<p>Welcome to my portfolio website! I'm a computer engineer with a passion for creating innovative solutions. Feel free to explore my projects and experiences using the folders above or the taskbar below.</p>
				<p>This portfolio showcases my skills in:</p>
				<ul>
				<li>React Native Mobile developer</li>
				<li>Web Development</li>
				<li>Machine Learning and LLM tuning</li>
				<li>Cloud Computing and deployments</li>
				<li>Hardware Design</li>
				</ul>
				</div>
			</div>
		</div>

		<!-- Social Links Section -->
		<div class="social-links-container centered-window">
			<div class="window fade-in">
				<div class="window-header">
					<div class="window-controls">
						<div class="window-control close"></div>
						<div class="window-control minimize"></div>
						<div class="window-control maximize"></div>
					</div>
					<div class="window-title">
						<div class="window-title-icon">
							<FaFileAlt />
						</div>
						<span>Connect With Me</span>
					</div>
				</div>
				<div class="window-content social-links">
					<a 
						href="https://github.com/Srushti2602"
						aria-label="GitHub"
						target="_blank"
						rel="noopener noreferrer"
						class="social-link"
					>
						<div class="social-icon">
							<FaGithub />
						</div>
						<span>GitHub</span>
					</a>
					<a
						href="https://www.linkedin.com/in/srushti-jagtap-08a10122b"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
						class="social-link"
					>
						<div class="social-icon">
							<FaLinkedin />
						</div>
						<span>LinkedIn</span>
					</a>
					<div
						role="button"
						tabindex="0"
						on:keypress={openEmailModal}
						on:click={openEmailModal}
						class="social-link"
					>
						<div class="social-icon">
							<FaEnvelope />
						</div>
						<span>Email Me</span>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

{#if showWindowsModal}
	<div class="windows-start-menu">
		<div class="left-panel">
			<a href="/" class="menu-item">Home</a>
			<a href="/projects" class="menu-item">Projects</a>
			<a href="/about" class="menu-item">About</a>
			<a href="/blog" class="menu-item">Experiences</a>
		</div>
		<div class="right-panel">
			<div class="user-info">
				<div class="user-avatar">SJ</div>
				<div class="user-name">Srushti Jagtap</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.intro-section {
		margin-top: 40px;
		margin-bottom: 40px;
		text-align: center;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}

	.intro-buttons {
		display: flex;
		gap: 15px;
		margin-top: 25px;
		justify-content: center;
	}

	.laptop {
		display: inline-block;
		animation: pulse 2s infinite;
	}

	.social-links-container {
		margin-top: 30px;
		margin-bottom: 60px;
	}

	.social-links {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}

	.social-link {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 12px 20px;
		background-color: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		transition: all 0.3s ease;
		cursor: pointer;
		text-decoration: none;
		color: var(--text-light);
	}

	.social-link:hover {
		background-color: rgba(255, 255, 255, 0.1);
		transform: translateY(-3px);
	}

	.social-icon {
		width: 24px;
		height: 24px;
		color: var(--primary-color);
	}

	.windows-start-menu {
		position: fixed;
		bottom: 50px;
		left: 0;
		width: 320px;
		background-color: rgba(30, 30, 30, 0.95);
		backdrop-filter: blur(10px);
		border-radius: 8px 8px 0 0;
		box-shadow: 0 -5px 25px rgba(0, 0, 0, 0.5);
		z-index: 1000;
		overflow: hidden;
		animation: slideUp 0.2s ease forwards;
	}

	.left-panel {
		padding: 15px 0;
	}

	.menu-item {
		display: flex;
		align-items: center;
		padding: 10px 20px;
		color: var(--text-light);
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.menu-item:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	.right-panel {
		padding: 15px;
		background-color: rgba(0, 120, 215, 0.2);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.user-info {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.user-avatar {
		width: 40px;
		height: 40px;
		background-color: var(--primary-color);
		color: var(--background-dark);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
	}

	.user-name {
		color: var(--text-light);
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.intro-section {
			margin-top: 20px;
			margin-bottom: 30px;
		}

		.intro-buttons {
			flex-direction: column;
			gap: 10px;
		}

		.social-links {
			flex-direction: column;
		}
	}
</style>
