<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import FaCopy from 'svelte-icons/fa/FaCopy.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';
	// import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Modal from '$lib/components/Modal.svelte';
	import { onMount } from 'svelte';
	import { customBackground } from '$lib/store';
	import { Email } from '$lib/Constants';
	import '$lib/styles/responsive.css';
	import '$lib/styles/enhanced-desktop.css';
	import '$lib/styles/custom-cursors.css';
	import DesktopTaskbar from '$lib/components/DesktopTaskbar.svelte';
	import MobileNavigation from '$lib/components/MobileNavigation.svelte';
	// import routes from '$lib/NavRoutes';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaWindows from 'svelte-icons/fa/FaWindows.svelte';
	

	let copied = false;
	const cookieEnabled = false;
	$: showCookieModal = false;

	interface CssVariables {
		[name: string]: string;
	}

	const cssVariables = (
		node: HTMLElement,
		variables: CssVariables
	): { update: (variables: CssVariables) => void } => {
		setCssVariables(node, variables);

		return {
			update(variables: CssVariables) {
				setCssVariables(node, variables);
			}
		};
	};

	const setCssVariables = (node: HTMLElement, variables: CssVariables): void => {
		for (const name in variables) {
			node.style.setProperty(`--${name}`, variables[name]);
		}
	};

	const copy = () => {
		navigator.clipboard.writeText(Email);
	};

	onMount(() => {
		const showCookie = localStorage.getItem('showCookieModal');
		if (showCookie !== null) showCookieModal = JSON.parse(showCookie);
		else showCookieModal = true;
	});

	// beforeNavigate(({ to }) => {
	// 	const pathName = to.pathname;
	// 	const route = routes.find((route) => pathName === route.href);
	// 	if (!route.customColor) {
	// 		customBackground.set('#0a0908');
	// 	} else customBackground.set(route.customColor);
	// });
</script>

<svelte:body use:cssVariables={{ background: $customBackground }} />

<div class="desktop-container">
  <div class="desktop-wallpaper"></div>
  
  {#if showCookieModal && cookieEnabled}
    <div class="cookieContainer">
      <p>🍪 This website uses <a href="privacy-policy">Cookies.</a></p>
      <div
        role="button"
        tabindex="0"
        on:keypress={() => {
          showCookieModal = false;
          localStorage.setItem('showCookieModal', 'false');
        }}
        on:click={() => {
          showCookieModal = false;
          localStorage.setItem('showCookieModal', 'false');
        }}
      >
        &#10005;
      </div>
    </div>
  {/if}
  
  <Modal>
    <div slot="content" class="modalContainer">
      <h1>Email:</h1>
      <div>
        <p>{Email}</p>
        &nbsp;
        <div class="tooltip">
          <Tooltip tooltip={copied ? 'Copied' : 'Copy'}>
            <div
              id="clipboard"
              role="button"
              tabindex="0"
              on:keypress={() => {
                copied = true;
                copy();
                setTimeout(() => {
                  copied = false;
                }, 500);
              }}
              on:click={() => {
                copied = true;
                copy();
                setTimeout(() => {
                  copied = false;
                }, 500);
              }}
            >
              <div>
                <FaCopy />
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
      <Button>Send Email</Button>
    </div>
  </Modal>
  
  <div class="content-area">
    <slot />
  </div>
  
  <DesktopTaskbar />
  <MobileNavigation />
</div>



<style>
	* {
		box-sizing: border-box;
	}

	@font-face {
		font-family: 'Fira Code', monospace;
		font-display: optional;
		src: url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
	}
	
	.desktop-container {
		position: relative;
		min-height: 100vh;
		padding-bottom: 40px; /* Space for taskbar */
	}
	
	.content-area {
		padding: 1rem;
		padding-bottom: 60px;
		max-width: 1200px;
		margin: 0 auto;
	}
	
	@media (max-width: 768px) {
		.desktop-container {
			padding-bottom: 60px;
		}
		
		.content-area {
			padding-bottom: 80px;
		}
	}

	:global(#svelte) {
		width: 100%;
		height: 100%;
		max-width: 900px;
		padding: 0 1rem;
		box-sizing: border-box;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	@media (min-width: 600px) {
		:global(#svelte) {
			padding: 0 2rem;
		}
	}
	
	@media (min-width: 900px) {
		:global(#svelte) {
			padding: 0;
		}
	}

	:global(html),
	:global(body) {
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
		font-family: 'Fira Code', monospace;
		background-color: #0a0908;
	}

	:global(body) {
		background-color: var(--background);
		background-size: 200% 200%;
		color: white;
		margin: 0;
		box-sizing: border-box;
		display: grid;
		line-height: 1.75;
		place-items: center;
		height: 100%;
		overflow-x: hidden;
	}

	:global(h1) {
		border: 0;
	}

	:global(::selection) {
		color: white;
		background: #ca3c25;
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
		height: 8px;
		border-radius: 1px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background-color: #fafffd;
		border-radius: 3px;
	}

	:global(::-webkit-scrollbar-track) {
		background-color: transparent;
		border-radius: 1px;
	}

	@media (min-width: 900px) {
		:global(body) {
			padding: 0 100px;
		}
	}

	:global(a) {
		text-decoration: none;
	}

	:global(a) {
		text-decoration: none;
	}

	a {
		color: rgb(0, 100, 200);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	a:visited {
		color: rgb(0, 80, 160);
	}

	.modalContainer div {
		display: flex;
		margin-bottom: 20px;
	}

	.modalContainer p {
		margin: 0;
	}

	:global(.tooltip) {
		visibility: hidden;
	}

	.cookieContainer {
		background: white;
		border-radius: 0px;
		text-align: center;
		width: 100%;
		height: 30px;
		color: black;
		padding: 30px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		position: fixed;
		bottom: 0px;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
	}
	.cookieContainer > p > a {
		text-decoration: underline;
	}

	.cookieContainer > div {
		cursor: pointer;
	}

	footer {
		font-size: 16px;
		font-weight: 400;
		padding: 30px 0;
		max-width: 900px;
		text-align: center;
		width: 100%;
	}

	footer a {
		text-decoration: none;
		color: #4158d0;
	}
	footer .svelte {
		color: #ff3e00;
	}

	footer .me {
		color: #ff3e00;
	}

	@media (min-width: 900px) {
		:global(.tooltip) {
			visibility: visible;
		}
	}
	@media (min-width: 600px) {
		.cookieContainer {
			background: white;
			border-radius: 50px;
			text-align: center;
			width: 350px;
			height: 30px;
			color: black;
			padding: 0 10px;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			position: fixed;
			bottom: 50px;
			left: 0;
			right: 0;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
