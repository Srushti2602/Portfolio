<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import FaWindows from 'svelte-icons/fa/FaWindows.svelte';
  import FaHome from 'svelte-icons/fa/FaHome.svelte';
  import FaFolder from 'svelte-icons/fa/FaFolder.svelte';
  import FaUser from 'svelte-icons/fa/FaUser.svelte';
  import FaBriefcase from 'svelte-icons/fa/FaBriefcase.svelte';
  import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
  
  $: currentPath = $page.url.pathname;
  
  let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let currentDate = new Date().toLocaleDateString();
  let showStartMenu = false;
  
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
    
    const timer = setInterval(() => {
      currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      currentDate = new Date().toLocaleDateString();
    }, 60000); // Update every minute
    
    return () => {
      document.removeEventListener('click', closeStartMenu);
      clearInterval(timer);
    };
  });
</script>

<div class="taskbar">
  <div class="taskbar-left">
    <div class="start-button" on:click={toggleStartMenu} role="button" tabindex="0">
      <div class="start-icon">
        <FaWindows />
      </div>
    </div>
    
    <div class="taskbar-divider"></div>
    
    <a href="/" class="taskbar-icon {currentPath === '/' ? 'active' : ''}">
      <div class="icon">
        <FaHome />
      </div>
    </a>
    <a href="/projects" class="taskbar-icon {currentPath.includes('/projects') ? 'active' : ''}">
      <div class="icon">
        <FaFolder />
      </div>
    </a>
    <a href="/about" class="taskbar-icon {currentPath.includes('/about') ? 'active' : ''}">
      <div class="icon">
        <FaUser />
      </div>
    </a>
    <a href="/blog" class="taskbar-icon {currentPath.includes('/blog') ? 'active' : ''}">
      <div class="icon">
        <FaBriefcase />
      </div>
    </a>
  </div>
  
  <div class="taskbar-right">
    <div class="search-box">
      <div class="search-icon">
        <FaSearch />
      </div>
    </div>
    
    <div class="taskbar-divider"></div>
    
    <div class="taskbar-time">
      <div class="time">{currentTime}</div>
      <div class="date">{currentDate}</div>
    </div>
  </div>
  
  {#if showStartMenu}
    <div class="start-menu" on:click|stopPropagation>
      <div class="start-menu-header">
        <span>Srushti Jagtap</span>
      </div>
      <div class="start-menu-items">
        <div class="start-menu-item" on:click={() => navigateTo('/')} role="button" tabindex="0">
          <div class="menu-icon"><FaHome /></div>
          <span>Home</span>
        </div>
        <div class="start-menu-item" on:click={() => navigateTo('/projects')} role="button" tabindex="0">
          <div class="menu-icon"><FaFolder /></div>
          <span>Projects</span>
        </div>
        <div class="start-menu-item" on:click={() => navigateTo('/about')} role="button" tabindex="0">
          <div class="menu-icon"><FaUser /></div>
          <span>About</span>
        </div>
        <div class="start-menu-item" on:click={() => navigateTo('/blog')} role="button" tabindex="0">
          <div class="menu-icon"><FaBriefcase /></div>
          <span>Experiences</span>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .taskbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: rgba(20, 20, 20, 0.85);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .taskbar-left, .taskbar-right {
    display: flex;
    align-items: center;
    height: 100%;
  }
  
  .start-button {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 15px;
    background-color: rgba(0, 120, 215, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .start-button:hover {
    background-color: rgba(0, 120, 215, 0.4);
  }
  
  .start-icon {
    width: 20px;
    height: 20px;
    color: #fff;
  }
  
  .taskbar-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100%;
    color: #708090;
    transition: all 0.3s ease;
    position: relative;
  }
  
  .taskbar-icon:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
  
  .taskbar-icon.active {
    color: #FFD43B;
  }
  
  .taskbar-icon.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 25%;
    width: 50%;
    height: 2px;
    background-color: #FFD43B;
  }
  
  .icon {
    width: 20px;
    height: 20px;
  }
  
  .taskbar-divider {
    width: 1px;
    height: 60%;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 8px;
  }
  
  .search-box {
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 100%;
    cursor: pointer;
  }
  
  .search-box:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .search-icon {
    width: 16px;
    height: 16px;
    color: #708090;
  }
  
  .taskbar-time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    height: 100%;
    cursor: default;
  }
  
  .time {
    font-size: 12px;
    font-weight: 500;
    color: #fff;
  }
  
  .date {
    font-size: 10px;
    color: #708090;
  }
  
  .start-menu {
    position: absolute;
    bottom: 50px;
    left: 0;
    width: 250px;
    background-color: rgba(30, 30, 30, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 8px 8px 0 0;
    box-shadow: 0 -5px 25px rgba(0, 0, 0, 0.5);
    animation: slideUp 0.2s ease forwards;
    overflow: hidden;
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
    padding: 15px;
    background-color: rgba(0, 120, 215, 0.2);
    font-weight: 600;
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .start-menu-items {
    padding: 10px 0;
  }
  
  .start-menu-item {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .start-menu-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .menu-icon {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    color: #708090;
  }
  
  .start-menu-item span {
    color: #fff;
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    .taskbar {
      display: none;
    }
  }
</style>
