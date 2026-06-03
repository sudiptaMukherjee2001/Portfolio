import img from "../../public/rmimg.png";
import linkdinUi from "../../public/linkdinUi.png";
import taskLikho from "../../public/taskLikho.png";

export const projects = [
    {
        title: "End-to-End CI/CD Pipeline with GitHub Actions",
        description:
                "Built a <span class='highlight'>containerized Next.js application</span> using <span class='highlight'>Docker</span> and automated the complete deployment process with a <span class='highlight'>GitHub Actions </span> CI/CD pipeline. The pipeline automatically <span class='highlight'>builds Docker images</span>, <span class='highlight'>pushes images to Docker Hub</span>, and <span class='highlight'>deploys the latest version to AWS EC2 via SSH</span>. Configured <span class='highlight'>Nginx as a reverse proxy</span> and integrated a custom subdomain through <span class='highlight'> Cloudflare DNS</span>, enabling <span class='highlight'>fully automated deployments from code push to production</span>.",
        tags: [
            "GitHub Actions",
            "Docker",
            "Docker Hub",
            "AWS EC2",
            "Nginx",
            "Cloudflare",
            "Linux",
            "CI/CD"
        ],
    
        
        githubUrl: "https://github.com/sudiptaMukherjee2001/nextjs-github-action-cicd",
        githubTxt: "Github"
    },
    {
        title: "Zero Downtime Deployment on Kubernetes & AWS",
        description:
            "Designed and implemented a <span class='highlight'>highly available cloud-native deployment architecture</span> using <span class='highlight'>Amazon EKS</span> and <span class='highlight'>AWS services</span>.",
        tags: [
            "Kubernetes",
            "Amazon EKS",
            "AWS",
            "Prometheus",
            "Grafana",
            "CloudWatch",
            "Route 53",
            "HPA"
        ],

        githubUrl: "https://github.com/sudiptaMukherjee2001/Kubernetes-learning/tree/main/service_ingress/domain_based_routing",
        githubTxt: "Github",
        url: "https://drive.google.com/file/d/1qPKnnsIKIDWhLaBxmHSnm5r4xJLlMxLx/view?usp=sharing",
        btnTxt:"View Documentation",

    },
    {
        title: "Containerized MEAN Application with CI/CD",
        description:
                "Deployed a <span class='highlight'>MEAN stack application</span> using <span class='highlight'>Docker containers</span> and automated the deployment with a <span class='highlight'>Jenkins CI/CD pipeline</span>. The application runs on <span class='highlight'>AWS EC2</span> with <span class='highlight'>Nginx configured as a reverse proxy</span> to route traffic between <span class='highlight'>frontend and backend services</span>.",
        tags: [
            "Docker",
            "Docker Compose",
            "Jenkins",
            "AWS EC2",
            "Nginx",
            "Node.js",
            "MongoDB"
        ],
    
        
        githubUrl: "https://github.com/sudiptaMukherjee2001/containerized-mean-stack-crud",
        githubTxt: "Github"
    },
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
    // {
    //     title: "LinkedIn UI Clone",
    //     // subtitle: "Real-Time EC2 Monitoring & Automation with AWS",
    //     description:
    //         "A responsive LinkedIn landing page clone built with HTML and CSS, mimicking the modern design and layout of LinkedIn's homepage.",
    //     tags: [
    //         "Html",
    //         "Css",
    //         "Responsive Design",
    //     ],
    //     url: "https://linkdin-ui-clone.netlify.app/", // Replace with actual deployed project if available
        
    //     imageUrl: linkdinUi,
    //     btnTxt:"View Demo"
    // },
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