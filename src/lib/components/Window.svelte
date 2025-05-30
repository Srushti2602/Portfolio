<script>
  import { createEventDispatcher, onMount } from 'svelte';
  
  export let title = '';
  export let minimizable = true;
  export let maximizable = true;
  export let closable = true;
  export let initialMaximized = false;
  
  const dispatch = createEventDispatcher();
  
  let isMaximized = initialMaximized;
  let isDragging = false;
  let startX, startY, startLeft, startTop;
  let windowElement;
  let windowHeader;
  let windowWidth = 600;
  let windowHeight = 400;
  let windowLeft = 50;
  let windowTop = 50;
  
  function close() {
    dispatch('close');
  }
  
  function minimize() {
    dispatch('minimize');
  }
  
  function maximize() {
    isMaximized = !isMaximized;
    dispatch('maximize', { isMaximized });
  }
  
  function startDrag(event) {
    if (isMaximized) return;
    
    // Only allow dragging from the header
    if (event.target.closest('.window-controls')) return;
    
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    startLeft = windowLeft;
    startTop = windowTop;
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
  }
  
  function drag(event) {
    if (!isDragging) return;
    
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    
    windowLeft = startLeft + deltaX;
    windowTop = startTop + deltaY;
  }
  
  function stopDrag() {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
  }
  
  onMount(() => {
    // Center the window initially
    if (typeof window !== 'undefined') {
      windowLeft = (window.innerWidth - windowWidth) / 2;
      windowTop = (window.innerHeight - windowHeight) / 2;
    }
    
    return () => {
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('mouseup', stopDrag);
    };
  });
</script>

<div 
  class="window {isMaximized ? 'maximized' : ''}" 
  bind:this={windowElement}
  style="width: {isMaximized ? '100%' : windowWidth + 'px'}; 
         height: {isMaximized ? '100%' : windowHeight + 'px'};
         left: {isMaximized ? '0' : windowLeft + 'px'};
         top: {isMaximized ? '0' : windowTop + 'px'};"
>
  <div 
    class="window-header"
    bind:this={windowHeader}
    on:mousedown={startDrag}
  >
    <div class="window-title">{title}</div>
    <div class="window-controls">
      {#if minimizable}
        <div class="window-control minimize" on:click={minimize} role="button" tabindex="0" aria-label="Minimize window"></div>
      {/if}
      {#if maximizable}
        <div class="window-control maximize" on:click={maximize} role="button" tabindex="0" aria-label="Maximize window"></div>
      {/if}
      {#if closable}
        <div class="window-control close" on:click={close} role="button" tabindex="0" aria-label="Close window"></div>
      {/if}
    </div>
  </div>
  <div class="window-content">
    <slot></slot>
  </div>
</div>

<style>
  .window {
    position: absolute;
    background: #111;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transition: width 0.3s ease, height 0.3s ease;
    z-index: 100;
    display: flex;
    flex-direction: column;
  }
  
  .window.maximized {
    border-radius: 0;
    box-shadow: none;
  }
  
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background: rgba(40, 40, 40, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    cursor: move;
    user-select: none;
  }
  
  .window-title {
    font-weight: 500;
    color: white;
  }
  
  .window-controls {
    display: flex;
    gap: 8px;
  }
  
  .window-control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .window-control.close {
    background: #e74c3c;
  }
  
  .window-control.minimize {
    background: #f1c40f;
  }
  
  .window-control.maximize {
    background: #2ecc71;
  }
  
  .window-content {
    flex: 1;
    overflow: auto;
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    .window {
      position: fixed;
      width: 100% !important;
      height: 100% !important;
      left: 0 !important;
      top: 0 !important;
      border-radius: 0;
    }
    
    .window-header {
      padding: 0.5rem;
    }
    
    .window-content {
      padding: 1rem;
    }
  }
</style>
