<script>
	import skills from '$lib/Skills';
</script>

<svelte:head>
	<title>Srushti Jagtap — About</title>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<p>
			I'm a Software developer currently pursuing Master's in Computer Engineering at New York University .
			I have completed my undergraduation from Vivekanand Education Society's Institute of Technology in Electronics 
			and Telecommunication Engineering from Mumbai University. Experienced in both enterprise and open-source software development. 
			I'm born and brought up in India but currently based in USA.I tend to learn and use the best technology and approach to best solve the problem I'm facing.
		</p>
		<h2>Skills</h2>
		{#each Object.entries(skills) as [section, technologies]}
			<ul>
				<li>
					<h4 class="skill-category">
						{section}:
					</h4>
					<div class="list">
						{#each technologies as technology}
							<div>
								{technology}
							</div>
						{/each}
					</div>
				</li>
			</ul>
		{/each}
	</main>
</div>

<style>
	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
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
		margin-top: 50px;
		background: var(--secondary-gradient);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		display: inline-block;
		position: relative;
	}
	
	h2::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 40px;
		height: 2px;
		background-color: var(--accent-color);
		border-radius: 2px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
	
	.list > div {
		padding: 8px 15px;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 6px;
		transition: all 0.3s ease;
		border-left: 3px solid var(--secondary-color);
	}
	
	.list > div:hover {
		background: rgba(255, 255, 255, 0.1);
		transform: translateX(5px);
		border-left-color: var(--accent-color);
	}

	.skill-category {
		color: var(--secondary-color);
		font-weight: 600;
		margin-bottom: 15px;
		display: inline-block;
		position: relative;
	}
	
	.skill-category::after {
		content: '';
		position: absolute;
		bottom: -3px;
		left: 0;
		width: 30px;
		height: 2px;
		background-color: var(--accent-color);
		border-radius: 2px;
	}

	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}
</style>