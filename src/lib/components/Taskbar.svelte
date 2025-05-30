<script>
  import { createEventDispatcher } from 'svelte';
  import FaWindows from 'svelte-icons/fa/FaWindows.svelte';
  import FaHome from 'svelte-icons/fa/FaHome.svelte';
  import FaFolder from 'svelte-icons/fa/FaFolder.svelte';
  import FaUser from 'svelte-icons/fa/FaUser.svelte';
  import FaBriefcase from 'svelte-icons/fa/FaBriefcase.svelte';
  import { onMount } from 'svelte';
  
  const dispatch = createEventDispatcher();
  let showStartMenu = false;
  let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  function toggleStartMenu() {
    showStartMenu = !showStartMenu;
  }
  
  function closeStartMenu(event) {
    if (!event.target.closest('.start-menu') && !event.target.closest('.start-button')) {
      showStartMenu = false;
    }
  }
  
  function navigateTo(path) {
    window.location.href = path;
    showStartMenu = false;
  }
  
  onMount(() => {
    document.addEventListener('click', closeStartMenu);
    
    // Update time every minute
    const timeInterval = setInterval(() => {
      currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }, 60000);
    
    return () => {
      document.removeEventListener('click', closeStartMenu);
      clearInterval(timeInterval);
    };
  });
</script>

<div class="taskbar">
  <div class="taskbar-left">
    <div class="start-button" on:click={toggleStartMenu} role="button" tabindex="0">
      <div class="start-icon">
        <FaWindows />
      </div>
      <span>Start</span>
    </div>
    
    {#if showStartMenu}
      <div class="start-menu">
        <div class="start-menu-header">
          <span>Srushti Jagtap</span>
        </div>
        <div class="start-menu-items">
          <div class="start-menu-item" on:click={() => navigateTo('/')} role="button" tabindex="0">
            <div class="start-menu-icon">
              <FaHome />
            </div>
            <span>Home</span>
          </div>
          <div class="start-menu-item" on:click={() => navigateTo('/projects')} role="button" tabindex="0">
            <div class="start-menu-icon">
              <FaFolder />
            </div>
            <span>Projects</span>
          </div>
          <div class="start-menu-item" on:click={() => navigateTo('/about')} role="button" tabindex="0">
            <div class="start-menu-icon">
              <FaUser />
            </div>
            <span>About</span>
          </div>
          <div class="start-menu-item" on:click={() => navigateTo('/blog')} role="button" tabindex="0">
            <div class="start-menu-icon">
              <FaBriefcase />
            </div>
            <span>Experiences</span>
          </div>
        </div>
      </div>
    {/if}
  </div>
  
  <div class="taskbar-center">
    <div class="active-windows">
      <!-- Active windows will be shown here -->
    </div>
  </div>
  
  <div class="taskbar-right">
    <div class="taskbar-time">
      {currentTime}
    </div>
  </div>
</div>

<style>
  .taskbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: rgba(20, 20, 20, 0.8);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    z-index: 1000;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .taskbar-left, .taskbar-center, .taskbar-right {
    display: flex;
    align-items: center;
  }
  
  .start-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    background: #FFD43B;
    border-radius: 4px;
    cursor: pointer;
    color: #0a0908;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  
  .start-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  
  .start-icon {
    width: 16px;
    height: 16px;
  }
  
  .taskbar-time {
    color: white;
    font-size: 0.9rem;
  }
  
  .start-menu {
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 250px;
    background: rgba(30, 30, 30, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 8px 8px 0 0;
    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    animation: slideUp 0.3s ease forwards;
  }
  
  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .start-menu-header {
    padding: 1rem;
    background: rgba(40, 40, 40, 0.8);
    color: white;
    font-weight: 500;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .start-menu-items {
    padding: 0.5rem 0;
  }
  
  .start-menu-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    color: white;
    cursor: pointer;
    transition: background 0.2s ease;
  }
  
  .start-menu-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .start-menu-icon {
    width: 20px;
    height: 20px;
    color: #FFD43B;
  }
  
  @media (max-width: 768px) {
    .taskbar {
      height: 50px;
    }
    
    .start-menu {
      bottom: 50px;
      width: 100%;
      border-radius: 8px 8px 0 0;
    }
  }
</style>
