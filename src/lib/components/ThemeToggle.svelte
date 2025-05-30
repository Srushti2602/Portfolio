<script>
  import { onMount } from 'svelte';
  import FaSun from 'svelte-icons/fa/FaSun.svelte';
  import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
  
  let theme = 'dark';
  
  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  
  onMount(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      theme = savedTheme;
      document.documentElement.setAttribute('data-theme', theme);
    }
  });
</script>

<button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
  {#if theme === 'dark'}
    <div class="icon">
      <FaSun />
    </div>
  {:else}
    <div class="icon">
      <FaMoon />
    </div>
  {/if}
</button>

<style>
  .theme-toggle {
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
    transition: all 0.3s ease;
    color: #FFD43B;
  }
  
  .theme-toggle:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
  
  .icon {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 768px) {
    .theme-toggle {
      top: 0.5rem;
      right: 0.5rem;
      width: 36px;
      height: 36px;
    }
    
    .icon {
      width: 16px;
      height: 16px;
    }
  }
</style>
