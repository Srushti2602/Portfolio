<svelte:head>
    <title>Srushti Jagtap — About</title>
</svelte:head>

<div class="container">
    <main>
        <h1>Experiences</h1>
        <p class = "justified">
            Apart from technical internships, I have actively engaged in various extracurricular activities. 
			Below is a list of all the experiences that have significantly contributed to defining who I am today.
			These experiences have played a crucial role in shaping me.
        </p>
        <h2>Experiences</h2>
        <div class="skills-container">
            <div class="skill-box">
                <h4>GeauxTV. Network May 2024 – present</h4>
				<h5>Web Developer </h5>
                <p>Responsible for developing and maintaining the website, ensuring optimal placement of images, buttons, and menu options for user accessibility.
Enhanced page speed, implemented seamless pop-ups and bot assistance, and designed the profile section to collect user information, including
an inbox and message center. Improved the video media player with mute/unmute functionality and disabled video playback during
development.</p>
            </div>
            <div class="skill-box">
                <h4> Introduction to programming in C Jan 2024-May 2024 </h4>
				<h5>New York University</h5>
                <p>Teaching lab , grading assignments and conducting exams are my responsibilities. I am also suppose to help them in coding and debugging their
projects . Problem solving for a batch of 50 students fostering a conducive learning environment for skill development.</p>
            </div>
            <div class="skill-box">
                <h4>Data Science and Business analyst intern Nov 2022 – Dec 2022</h4>
				<h5>The Spark foundation </h5>
                <p>Developed a stock market prediction model using numerical and textual analysis, incorporating historical stock prices from Yahoo Finance and
Indian news headlines. Visualized predicted close prices alongside actual data, achieving a low RMSE of 0.524 with Random Forest Regression,
demonstrating superior performance.</p>
            </div>
			<div class="skill-box">
                <h4> Graduate Lab Assistant, Applied Physics Lab May 2024 - August 2024 </h4>
				<h5>New York University</h5>
                <p>I set up and prepared weekly experiments, collected and analyzed experiment reports, assisted professors with their research projects,
				supported two undergraduate classes during their laboratory sessions, and maintained a safe and orderly laboratory environment.</p>
            </div>
			<div class="skill-box">
                <h4> CO - Chairperson at ISTE -VESIT (Indian Society of Technical Education)</h4>
				<h5>VESIT</h5>
                <p>Teaching lab , grading assignments and conducting exams are my responsibilities. I am also suppose to help them in coding and debugging their
projects . Problem solving for a batch of 50 students fostering a conducive learning environment for skill development.</p>
            </div>
			<div class="skill-box">
                <h4> Head of EBSB VESIT (Ek Bharat Shreshta Bharat Council)</h4>
				<h5>VESIT</h5>
                <p> Structured 5 workshops in a year in collaboration with IMI Bhubaneswar for 1 year. A 15-member council certified under Prime Minister Modi's Ek Bharat Shrestha Bharat initiative.
Undertaking workshops in both technical and cultural exchange centric. Made professional presentations using Prezi and documented lectures .</p>
            </div>
			<div class="skill-box">
                <h4> Managing Secretary at ISTE VESIT</h4>
				<h5>VESIT</h5>
                <p>Facilitated workshops on Machinera, which focuses on Artificial Intelligence, React Native and Big Data. 
				Led a technical team which was responsible for a real- time stock market that allowed 300 players to trade in a virtual stock market portal named Dalal Street.</p>
            </div>
			<div class="skill-box">
                <h4> Career Development Coordinator</h4>
				<h5>VESIT</h5>
                <p>Associated with academic departments and faculty to align curricula with industry demands. Provided career guidance and counseling to students to help them make informed decisions about their academic and professional choices.
Collected placement-related data to assess the effectiveness of placement services and make data-driven improvements.
Involved alumni in placement activities to offer opportunities to current students.</p>
            </div>
			<div class="skill-box">
                <h4> CO - Chairperson at ISTE -VESIT (Indian Society of Technical Education)</h4>
				<h5>VESIT</h5>
                <p>Teaching lab , grading assignments and conducting exams are my responsibilities. I am also suppose to help them in coding and debugging their
projects . Problem solving for a batch of 50 students fostering a conducive learning environment for skill development.</p>
            </div>
        </div>
    </main>
</div>

<style>
    .container {
        width: 100%;
        max-width: 900px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        text-align: center;
        padding: 1em;
        margin: 0 auto;
        text-align: justified;
    }

    main {
        width: 100%;
        text-align: start; /* align text to the start */
        box-sizing: border-box;
    }

    h1, h2 {
        font-weight: 700;
        margin-top: 0;
    }

    h1 {
        margin-bottom: 20px;
        font-size: 36px; /* adjusted for consistency with the project style */
		
    }

    h2 {
        display: flex;
        margin-top: 50px;
        margin-bottom: 10px;
    }

    .skills-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 40px;
        margin-top: 30px;
    }

    .skill-box {
        text-align: start;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        color: white;
        background: #111; /* darker background as per your project style */
        padding: 2rem;
        width: 100%;
        border-radius: 25px; /* keeping rounded corners as specified */
        transition: transform 0.2s ease-in-out;
		text-align: justify;
    }

    .skill-box p, .skill-box h4, .skill-box h5 {
        font-weight: 100;
        color: #708090; /* dark grey text, lighter than black for better readability */
		text-align: justify;
    }

    .skills-container {
        width: 100%;
        margin: 50px auto;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr;
        margin-bottom: 10px;
		text-align: justify;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border: 2px solid white;
        padding: 10px;
    }

    @media (min-width: 900px) {
        .container {
            padding: 0;
        }
        main > h1 {
            font-size: 48px; /* larger font size for wider screens */
            margin: 50px 0 0 0;
        }

        .skills-container {
            grid-template-columns: 1fr;
        }

        .skill-box {
            min-height: 200px; /* ensure boxes have a minimum height */
        }
        .button {
            max-width: 200px;
        }
    }

    @media (min-width: 600px) {
        .skills-container {
            grid-template-columns: 1fr;
        }
    }
	
    .justified {
        text-align: justify;
    }


</style>

