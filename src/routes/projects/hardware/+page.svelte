<script>
    import projects from '$lib/Projects';

    const hardwareProjects = projects.filter(project => project.category === 'hardware');
</script>

<svelte:head>
    <title>Hardware Projects</title>
</svelte:head>

<div class="projectContainer responsive-container">
    <div class="projects overflow-hidden">
        <h1>Hardware Projects</h1>
        <p class="note justified ">
            Note: most of my projects are under NDA so I am unable to share those projects. If there is
            anything you would like to see further, please feel free to contact me.
        </p>
        {#each hardwareProjects as project}
            <div class="project">
                <div class="header">
                    <h2>{project.title}</h2>
                    <div class="techsContainer">
                        Technologies:
                        <div class="techs">
                            {#each project.technologies as tech}
                                <div>{tech}</div>
                            {/each}
                        </div>
                    </div>
                </div>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noreferrer">
                    <div class="button">Project url =></div>
                </a>
            </div>
        {/each}
    </div>
</div>


<style>
.projectContainer .projects .justified {
    text-align: justify;
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

	a {
		text-decoration: none;
	}

	.projectContainer .projects {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 40px;
		margin-top: 30px;
	}

	h1 {
		font-weight: 700;
		text-align: start;
		margin-top: 2rem;
		padding-top: 1rem;
		margin-bottom: 1.5rem;
		background: var(--primary-gradient);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		position: relative;
		display: inline-block;
	}
	
	h1::after {
		content: '';
		position: absolute;
		bottom: -8px;
		left: 0;
		width: 60px;
		height: 3px;
		background-color: var(--secondary-color);
		border-radius: 3px;
	}

	h2 {
		display: flex;
		margin: 0 0 10px 0;
		color: var(--text-light);
		background: var(--secondary-gradient);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 600;
	}

	.project {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: white;
		background: var(--card-bg);
		padding: 2rem;
		width: 100%;
		border-radius: 12px;
		transition: all 0.3s ease;
		border: 1px solid rgba(255, 255, 255, 0.05);
		position: relative;
		overflow: hidden;
	}
	
	.project::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 4px;
		height: 100%;
		background: var(--secondary-gradient);
	}
	
	.project:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	.project p {
		font-weight: 100;
		color: #708090;
		text-align: justify;
	}

	.projects {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	.techsContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.techs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.techs > div {
		margin: 0 0 0 10px;
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--background-dark);
		background: var(--secondary-gradient);
		padding: 12px 20px;
		border-radius: 6px;
		font-weight: 600;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
		z-index: 1;
	}
	
	.button::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--accent-gradient);
		z-index: -1;
		transition: transform 0.5s ease;
		transform: scaleX(0);
		transform-origin: right;
	}
	
	.button:hover::before {
		transform: scaleX(1);
		transform-origin: left;
	}
	
	.button:hover {
		transform: translateY(-3px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
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