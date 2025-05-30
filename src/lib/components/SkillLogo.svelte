<script>
    export let name = '';
    export let logo = '';
</script>

<div class="skill-item">
    <div class="skill-logo">
        {@html logo}
    </div>
    <span class="skill-name">{name}</span>
</div>

<style>
    .skill-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        padding: 15px;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.05);
        transition: all 0.3s ease;
        width: 100px;
        height: 100px;
        justify-content: center;
    }

    .skill-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        background-color: rgba(255, 255, 255, 0.1);
    }

    .skill-logo {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .skill-logo :global(svg) {
        width: 100%;
        height: 100%;
    }

    .skill-name {
        font-size: 0.8rem;
        text-align: center;
        color: #fff;
    }
</style>
