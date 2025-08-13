import img from "../../public/rmimg.png";
import linkdinUi from "../../public/linkdinUi.png";
import taskLikho from "../../public/taskLikho.png";
export const projects = [
    {
        title: "Serverless EC2 Monitor & Control Dashboard",
        subtitle: "Real-Time EC2 Monitoring & Automation with AWS",
        description:
            "A real-time EC2 monitoring dashboard leveraging AWS Lambda, API Gateway, and DynamoDB for automation.",
        tags: [
            "AWS Lambda",
            "API Gateway",
            "DynamoDB",
            "React"
        ],
    
        
        url: "https://www.ijirset.com/upload/2025/may/300_Build.pdf",
        imageUrl: img,
        btnTxt:"Publication link"
    },
    {
        title: "LinkedIn UI Clone",
        // subtitle: "Real-Time EC2 Monitoring & Automation with AWS",
        description:
            "A responsive LinkedIn landing page clone built with HTML and CSS, mimicking the modern design and layout of LinkedIn's homepage.",
        tags: [
            "Html",
            "Css",
            "Responsive Design",
        ],
        url: "https://linkdin-ui-clone.netlify.app/", // Replace with actual deployed project if available
        
        imageUrl: linkdinUi,
        btnTxt:"View Demo"
    },
    {
        title: "TaskLikho",
        // subtitle: "Real-Time EC2 Monitoring & Automation with AWS",
        description:
            "TaskLikho is a minimal and responsive to-do app I built for personal task management, featuring a clean UI and quick task creation",
        tags: [
            "Next.js",
            "Mui",
            "Express.js",
            "MongoDB",
            "Responsive Design",
        ],
        url: "https://tasklikho.sudiptoworks.in/", // Replace with actual deployed project if available
        githubUrl: "https://github.com/sudiptaMukherjee2001/TaskLikho", // Replace with GitHub repo URL
        imageUrl: taskLikho,
        btnTxt:"View Demo",
        githubTxt: "Github"
    },
  
];