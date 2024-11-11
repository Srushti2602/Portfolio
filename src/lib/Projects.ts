const projects = [
	
	{
		title: 'CleverConnect',
		technologies: ['Ollama','Github Actions','Trello', 'Slack',' Google Mail', 'Google Calendar'],
		description: ' Developed a Slack-integrated automation bot that streamlined workflow by connecting Slack, Google Gmail, Google Calendar, Trello, and Ollama AI model. Designed to fetch recent emails, identify meeting-related messages, and extract meeting details through NLP processing with the Ollama model. The bot synchronized calendar events with Trello, allowing users to manage tasks directly through Slack commands. Built using Python with Slack Bolt API for event handling, Google API for Gmail and Calendar integration, and Trello API for task management. Implemented OAuth authentication and ensured secure handling of API credentials. Leveraged GitHub Actions for CI/CD to automate Ollama model updates and testing. This project enhanced productivity by consolidating communication, scheduling, and task management into a single, efficient Slack-based interface.',
		url: 'https://github.com/Srushti2602/CleverConnect-application',
		category: 'cloud-computing'
	},
	{
		title: 'ToDoSync',
		technologies: ['Docker', 'Kubernetes','AWS services' , 'Minikube', 'Prometheus'],
		description: ' Created a To-Do web application with Flask & MongoDB deployed on Kubernetes using Docker Container . Deployed the container on a local Kubernetes cluster using Minikube and then deployed it on AWS EKS. Utilized MongoDB for data storage.Implemented Prometheus for real-time alerting and monitoring, enabling the reception of Kubernetes alerts for proactive issueresolution which elevated our operational efficiency by enabling 80% faster detection',
		url: 'https://github.com/Srushti2602/ToDoSync',
		category: 'cloud-computing'
	},
	{
		title: 'Dining Eats',
		technologies: ['AWS services',' Lambda', 'Lex', 'SNS', 'SQS', 'ElasticSearch', 'DynamoDB'],
		description: 'Devised a serverless, micro service-driven web application created completely using AWS cloud services. Chatbot provides restaurant recommendations to the users based on the 5 preferences provided to it through conversations using Natural Language Processing. Entire Architecture was built using AWS CloudFormation.Implemented CI/CD with AWS CodeBuild , CodePipeline so that any commits to GitHub would trigger relevant AWS functions. It uses SES and SNS for notifications and SQS for message queuing. Its integrated with Yelp via Elasticsearch for cuisine-based restaurant ID queries, and DynamoDB for retrieving restaurant details.',
		url: 'https://github.com/Srushti2602/SrushEats',
		category: 'cloud-computing'
	},
	
	{
		title: 'Virtual companion',
		technologies: ['NLP (natural language processing)', 'blob',' Django'],
		description: 'Scraped 40 million messages from a counseling site for people facing depression, resulting in a novel dataset. Included calculation of the happiness rate of users after every talk with bot using Machine Learning and the Django Framework. The scraped data was used to analyze the sentiments of live COVID’19 Tweets. Designed the front end of the website and hosted it on Azure improving chatbot response efficiency by 20%. Developed and streamlined the dashboard showcasing the overall positivity of the public like top 5 positive tweets and feedbacks.',
		url: 'https://github.com/Srushti2602?tab=repositories',
		category: 'cloud-computing'
	},
	{
		title: 'TaleWeaver',
		technologies: ['AWS Services ','PHP' ,'OpenAI' ,'Rekognition' ,'DynamoDB'],
		description: 'Developed a dynamic web application to transform personal images into AI-generated stories. Managed routing and session tokens through PHP, HTML, and CSS files, ensuring reduced response time to fetch story by 30% and concurrency. Enabled users to upload photos, receiving AI-generated stories that could be summarized. Each user had a dedicated account, providing access to previously generated stories for summarization. This was hosted on AWS EC2. Utilized AWS Rekognition to process uploaded photos, generating labels sent to OpenAI. Stored detailed information, including user data and uploaded photos, in DynamoDB. Fetched OpenAI-generated stories from the database for display on the front end.',
		url: 'https://github.com/Srushti2602/taleweaver',
		category: 'cloud-computing'
	},
	{
		title: 'ResNet architecture tailored for the CIFAR-10 dataset',
		technologies: ['NYU HPC', 'Python'],
		description: ' Developed an enhanced ResNet architecture for CIFAR-10, achieving 95% accuracy on the test dataset and 85.5% on a hidden dataset. Utilized data normalization and augmentation to improve generalization, and incorporated Squeeze-and-Excitation blocks within a customized ResNet architecture under 5 million parameters. Implemented batch normalization and ReLU activations to stabilize training. Tuned hyperparameters using the SGD optimizer with momentum and dynamic learning rate scheduling (OneCycleLR and Cosine Annealing). Employed an 8x8 average pooling layer and 1x1 kernels in shortcut connections, trained over 200 epochs on an NYU HPC VM environment with Nvidia Quadro RTX 8000 and 64 GB RAM.',
		url: 'https://github.com/Srushti2602/ECE-GY-7123-DL-mini-project',
		category: 'deep-learning'
	},
	{
		title: 'Data Retraction and Ensuring Model Integrity',
		technologies: ['NYU HPC', 'Python'],
		description: ' Engineered a method for unlearning features and labels in machine learning models to address data leaks, privacy issues, and poisoning attacks, particularly in computer vision.Implemented unlearning as a closed-form update of model parameters using first-order and second- order update strategies, enhancing scalability and effectiveness. Validated the approach on the CIFAR-10 dataset, demonstrating the ability to correct label poisoning in a CNN with approximately 1.8 million parameters.Achieved restoration of model accuracy to 78.30% after a poisoning attack, compared to the initial 87.86%, highlighting the potential for further refinement to improve accuracy.',
		url: 'https://github.com/Srushti2602/DL-Major-Project',
		category: 'deep-learning'
	},
	{
		title: 'RISCV_simulator_Single and Multistage',
		technologies: ['Python'],
		description: 'Built a five stage simulator which would mimic the output of the RV32I output . The performance matrix of each test case gives us the details of cycles per instruction , number of cycles taken and much more . There are 2 files to initialize the instruction and data memory.The input loads two words from memory in binary , adds them and stores back into memory . Other complex mathematical operations and control flow statements are also implemented . Analysis of the performance matrix helps us conclude that as the instructions sets become complex the number of cycles increases .',
		url: 'https://github.com/Srushti2602/RISCV_simulator_SingleandMultistage',
		category: 'hardware'
	},
	{
		title: 'Plant-Processing',
		technologies: ['React ',' AWS Amplify '],
		description: 'This dashboard provides comprehensive insights into the operations and performance of our food processing plant. Utilizing data extracted from an Excel sheet and presented in the form of interactive charts, this dashboard offers valuable information for monitoring and analyzing various aspects of the plants activities. Locally hosted on port 3000 or deployed on Amplify AWS : https://main.d3klpo10jp4gxn.amplifyapp.com/',
		url: 'https://github.com/Srushti2602/Plant-Processing',
		category: 'cloud-computing'
	},
	{
		title: 'React-Engineer-Role-website',
		technologies: ['React ',' AWS Amplify ','Vite','Tailwind'],
		description: 'Build a website using react for employers and for developers .You can enter the job details and description as an employer .I used Vite and Tailwind (for css).This dashboard provides comprehensive insights into the operations and performance of our food processing plant. Utilizing data extracted from an Excel sheet and presented in the form of interactive charts, this dashboard offers valuable information for monitoring and analyzing various aspects of the plants activities. Locally hosted on port 3000 or deployed on Amplify AWS : https://main.d3klpo10jp4gxn.amplifyapp.com/Built', 
		url: 'https://github.com/Srushti2602/React-Engineer-Role-website',
		category: 'cloud-computing'
	},
	{
		title: 'Image-classification-using-vision-transformers',
		technologies: ['Python'],
		description: 'Vision Transformer (ViT) model on the Fashion-MNIST dataset. This includes defining the model, loading the dataset, training the model across epochs while monitoring loss, saving the trained model, and evaluating its accuracy on the test set. The process also visualizes the models predictions for a few sample images. The implementation showcases the ViT models capability to handle image classification tasks, demonstrating transformers applicability beyond natural language processing to computer vision. This work exemplifies a complete workflow from data preparation to model evaluation, highlighting the models effectiveness through accuracy metrics and visual insights into its predictions.',
		url: 'https://github.com/Srushti2602/Image-classification-using-vision-transformers-',
		category: 'deep-learning'
	},
	{
		title: 'The-need-for-speed-using-STM32',
		technologies: ['STM32F429','L3GD20 gyroscope ','C++'],
		description: 'Designed a GPS-free wearable speedometer using the STM32F429 microcontroller and L3GD20 gyroscope and attached it on the ankle for efficient output . Formulated firmware for angular velocity capture, conversion to linear velocity, and distance calculation. Amalgamation of embedded systems, sensor integration, and algorithmic development in this project Project outcomes: covered distance of 2100 cm, average speed of 100 cm/s over 21 seconds were displayed on the screen.Build a website using react for employers and for developers ',
		url: 'https://github.com/Srushti2602/The-need-for-speed-using-STM32',
		category: 'hardware'
	},
	{
		title: 'Loan_Approval_Prediction_System',
		technologies: ['Python '],
		description: ' This system is created using Logistic Regression with the functionality of CIBIL score.',
		url: 'https://github.com/Srushti2602/React-Engineer-Role-website',
		category: 'deep-learning'
	},
	{
		title: 'Prediction-of-stock-market-using-numerical-and-textual-analysis',
		technologies: ['Python',],
		description: 'In this task I tried to create a hybrid model for stock performance prediction using numerical analysis of historical stock prices, and sentimental analysis of news headlines. (Used Stack LSTM).Historical stock prices :https://finance.yahoo.com/ Textual news headlines : https://bit.ly/36fFPI6',
		url: 'https://github.com/Srushti2602/Prediction-of-stock-market-using-numerical-and-textual-analysis',
		category: 'deep-learning'
	},
	{
		title: 'WaferFaultDetection',
		technologies: ['Flask','Python'],
		description: 'This Flask-based web application serves as a platform for wafer fault detection, featuring endpoints for predicting faults and training the model, with error handling and monitoring capabilities.',
		url: 'https://github.com/Srushti2602/WaferFaultDetection/tree/master/WaferFaultDetection-master',
		category: 'cloud-computing'
	},
];

export default projects;
