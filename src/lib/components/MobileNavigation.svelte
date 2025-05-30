<script>
  import { page } from '$app/stores';
  import FaHome from 'svelte-icons/fa/FaHome.svelte';
  import FaFolder from 'svelte-icons/fa/FaFolder.svelte';
  import FaUser from 'svelte-icons/fa/FaUser.svelte';
  import FaBriefcase from 'svelte-icons/fa/FaBriefcase.svelte';
  
  $: currentPath = $page.url.pathname;
</script>

<nav class="mobile-nav">
  <div class="mobile-nav-icons">
    <a href="/" class="mobile-nav-icon {currentPath === '/' ? 'active' : ''}">
      <div class="icon">
        <FaHome />
      </div>
      <span>Home</span>
    </a>
    <a href="/projects" class="mobile-nav-icon {currentPath.includes('/projects') ? 'active' : ''}">
      <div class="icon">
        <FaFolder />
      </div>
      <span>Projects</span>
    </a>
    <a href="/about" class="mobile-nav-icon {currentPath.includes('/about') ? 'active' : ''}">
      <div class="icon">
        <FaUser />
      </div>
      <span>About</span>
    </a>
    <a href="/blog" class="mobile-nav-icon {currentPath.includes('/blog') ? 'active' : ''}">
      <div class="icon">
        <FaBriefcase />
      </div>
      <span>Experiences</span>
    </a>
  </div>
</nav>

<style>
  .mobile-nav {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(20, 20, 20, 0.9);
    backdrop-filter: blur(10px);
    padding: 10px 0;
    z-index: 1000;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .mobile-nav-icons {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .mobile-nav-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    padding: 8px 0;
    transition: all 0.3s ease;
  }
  
  .icon {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
    color: #708090;
    transition: all 0.3s ease;
  }
  
  .mobile-nav-icon.active .icon {
    color: #FFD43B;
    transform: translateY(-2px);
  }
  
  .mobile-nav-icon span {
    font-size: 12px;
    color: #708090;
    transition: all 0.3s ease;
  }
  
  .mobile-nav-icon.active span {
    color: #FFD43B;
  }
  
  @media (max-width: 768px) {
    .mobile-nav {
      display: block;
    }
  }
</style>
