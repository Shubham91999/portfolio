import type { Metadata } from 'next';
import {
  FaReact, FaAws, FaMoneyCheckAlt, FaExchangeAlt,
  FaCloud, FaAndroid, FaMicrochip, FaRaspberryPi,
  FaTasks, FaStripeS, FaJava, FaInstagram, FaPhone,
  FaRobot, FaBrain, FaCode, FaTerminal, FaCubes,
  FaProjectDiagram, FaSync
} from "react-icons/fa";
import {
  SiSpringboot, SiMysql, SiTypescript, SiNextdotjs,
  SiChartdotjs, SiTailwindcss, SiAppwrite, SiNodedotjs,
  SiExpress, SiPostgresql, SiPrisma, SiSpring,
  SiPostman, SiHibernate, SiGithub, SiSwift,
  SiFirebase, SiXcode, SiDjango, SiReact, SiLinkedin,
  SiLeetcode, SiPython, SiCplusplus, SiJavascript,
  SiFastapi, SiSqlalchemy, SiPydantic, SiScikitlearn,
  SiPytorch, SiTensorflow,
  SiMongodb, SiAmazondynamodb, SiSnowflake, SiGit,
  SiDocker, SiKubernetes, SiGooglecloud, SiApachekafka,
  SiGooglebard, SiVisualstudiocode
} from "react-icons/si";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const siteMetadata = {
  title: 'Shubham Kulkarni | Portfolio',
  description: 'Software Engineer specializing in Full-Stack Development, AI/ML, and Backend Systems.',
  author: 'Shubham Kulkarni',
  siteUrl: 'https://shubham-kulkarni.com', // Placeholder
  twitterHandle: '@shubham9199', // Placeholder
  email: '02shubhamkulkarni@gmail.com',
  phone: '+1 602-570-5459',
  location: 'Seattle, Washington',
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Backend Developer",
  ],
  firstName: 'Shubham',
  lastName: 'Kulkarni',
  bio: 'Passionate about data, machine learning, and generative AI, I build scalable and intelligent systems with precision. I design and develop end-to-end AI and ML products, from training models and building APIs to deploying scalable backend services and frontends in the cloud.',
  social: {
    linkedin: 'https://www.linkedin.com/in/shubham9199/',
    github: 'https://github.com/Shubham91999',
    leetcode: 'https://leetcode.com/u/sskulkarni/',
    instagram: 'https://www.instagram.com/sskulkarni999?igsh=MWRqZGhoMWc4dmV4cw%3D%3D',
  }
};

export const generateMetadata = (path: string): Metadata => {
  const currentUrl = `${siteMetadata.siteUrl}${basePath}${path}`;

  return {
    title: siteMetadata.title,
    description: siteMetadata.description,
    authors: [{ name: siteMetadata.author }],
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      url: currentUrl,
      siteName: siteMetadata.title,
      type: 'website',
      images: [
        {
          url: `${currentUrl}/images/og-image.png`, // Placeholder
          width: 1200,
          height: 630,
          alt: siteMetadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteMetadata.title,
      description: siteMetadata.description,
      creator: siteMetadata.twitterHandle,
      images: [`${currentUrl}/images/og-image.png`], // Placeholder
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(siteMetadata.siteUrl),
  };
};

export const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#009652ff" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "SQL", icon: SiPostgresql, color: "#4169E1" },
    ]
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "FastAPI", icon: SiFastapi, color: "#05998B" },
      { name: "Django", icon: SiDjango, color: "#092E20", darkColor: "#0C4B33" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Express.js", icon: SiExpress, color: "#000000", darkColor: "#68A063" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", darkColor: "#FFFFFF" },
      { name: "SQLAlchemy", icon: SiSqlalchemy, color: "#D71F00" },
      { name: "Pydantic", icon: SiPydantic, color: "#E92063" },
    ]
  },
  {
    category: "AI/ML",
    skills: [
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Sentence Transformers", icon: FaRobot, color: "#FFD21E" },
      { name: "Word2Vec", icon: FaBrain, color: "#FFD21E" },
      { name: "HuggingFace", icon: FaRobot, color: "#FFD21E" },
      { name: "LangChain", icon: FaBrain, color: "#121212", darkColor: "#00C853" },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "DynamoDB", icon: SiAmazondynamodb, color: "#4053D6" },
      { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
    ]
  },
  {
    category: "DevOps",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717", darkColor: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
    ]
  },
  {
    category: "AI Coding Assistants",
    skills: [
      { name: "GitHub Copilot", icon: SiGithub, color: "#181717", darkColor: "#FFFFFF" },
      { name: "Claude Code", icon: "/icons/claude-code.png", color: "#FFD21E" },
      { name: "Gemini CLI", icon: "/icons/gemini-cli.png", color: "#4285F4" },
      { name: "Cursor", icon: "/icons/cursor.png", color: "#007ACC" },
    ]
  },
  {
    category: "Other",
    skills: [
      { name: "DSA", icon: FaCode, color: "#000000", darkColor: "#8B5CF6" },
      { name: "OOP", icon: FaCubes, color: "#000000", darkColor: "#8B5CF6" },
      { name: "Design Patterns", icon: FaProjectDiagram, color: "#000000", darkColor: "#8B5CF6" },
      { name: "Agile Development", icon: FaSync, color: "#000000", darkColor: "#8B5CF6" },
      { name: "Kafka", icon: SiApachekafka, color: "#231F20", darkColor: "#FFFFFF" },
    ]
  }
];

// Placeholders for Projects, Education, and Experience (to be updated later)
export const experiences = [
  {
    title: "AI/ML Engineer Intern",
    company: "PACCAR (Kenworth Truck Company)",
    location: "Seattle, WA",
    type: "Internship",
    date: "May 2025 - Jan 2026",
    skills: ["Python", "FastAPI", "Java", "AWS", "React", "Next.js", "TypeScript", "Docker", "Kubernetes"],
    desc: [
      "Developed backend microservices for ML-driven recommendations via APIs, achieving 94% accuracy in generation and delivering $780K in operational savings.",
      "Engineered robust CI/CD pipelines using Docker and GitHub Actions for AWS EKS (Kubernetes) deployments, reducing feedback cycles from 4 days to 3 hours.",
      "Designed and implemented an internal platform automation service, cutting engineering report generation time by 60% and manual effort by 98%.",
      "Contributed to Next.js frontend integration with backend services, enhancing user experience and application responsiveness for internal tools."
    ]
  },
  {
    title: "Graduate Teaching Assistant",
    company: "Arizona State University",
    location: "Tempe, AZ",
    type: "Part-time",
    date: "Jan 2025 - May 2025",
    skills: ["DBMS", "SQL", "MySQL", "PostgreSQL", "Data Modeling"],
    desc: [
      "Assisted in teaching Database Management System course to 200+ students across 3 sessions.",
      "Held office hours and solved student's queries and issues, demonstrating strong communication and collaboration skills."
    ]
  },
  {
    title: "Software Engineer",
    company: "Capgemini",
    location: "Bengaluru, India",
    type: "Full-time",
    date: "Nov 2020 - Aug 2023", // Note: Dates provided by user seem futuristic or typos (2025-2026?), assuming correct as per input
    skills: ["Java", "Spring Boot", "TypeScript", "Hibernate", "React", "Next.js", "Kafka", "Docker", "AWS"],
    desc: [
      "Developed and enhanced Java Spring Boot backend services, delivering 12+ REST APIs and reducing change turnaround time by 25–35%.",
      "Wrote JUnit test suites for critical Java services, increasing coverage by 49% and cutting production regressions by 15–25%.",
      "Implemented Kafka-based asynchronous processing in Java, boosting throughput by 76% and improving peak-load stability.",
      "Automated CI/CD processes with Jenkins pipelines (build/test/package/deploy), reducing deployment time by 56% and improving release frequency.",
      "Built and packaged Java services with Maven, reducing build failures by 32% by standardizing dependency versions and build profiles.",
      "Contributed to 20+ React-based frontend components in client-facing applications, focusing on component reusability and performance optimization."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "iFuture Technologies",
    location: "Mumbai, India",
    type: "Internship",
    date: "May 2019 - Jul 2019",
    skills: ["Java", "Spring Boot", "React", "JavaScript", "MongoDB", "AWS"],
    desc: [
      "Wrote and optimized SQL analytics queries to analyze financial datasets, identify cost drivers, and deliver insights resulting in a 10% reduction in operational costs via improved resource allocation.",
      "Implemented a resilient API Gateway Service with OAuth2 user authentication system using Java, JWT Tokens, and Spring Boot, reducing authentication errors by 85% across the Intelligent Automation team."
    ]
  }
];

export const education = [
  {
    title: "Master of Science in Information Technology",
    institution: "Arizona State University",
    location: "Tempe, AZ",
    date: "2023 - 2025",
    cgpa: "3.8/4.0",
    coursework: [
      "Natural Language Processing",
      "Machine Learning",
      "Cloud Computing",
      "Big Data Analysis"
    ]
  },
  {
    title: "Bachelor of Science in Information Technology",
    institution: "University of Mumbai",
    location: "Mumbai, India",
    date: "2017 - 2020",
    cgpa: "9.0/10.0",
    coursework: [
      "OOP",
      "Advanced Data Structures",
      "Software Engineering",
      "DBMS",
      "Computer Networks",
      "Artificial Intelligence"
    ]
  },
  {
    title: "Technical Diploma in Information Technology",
    institution: "University of Mumbai",
    location: "Mumbai, India",
    date: "2014 - 2017",
    cgpa: "4.0/4.0",
    coursework: [
      "C/Java Programming",
      "Data Structures",
      "Web Tech",
      "Operating Systems",
      "Software Testing",
      "RDBMS"
    ]
  },
];

export const certifications = [
  {
    title: "Deep Learning with Torch",
    issuer: "DataCamp",
    date: "Nov 2025",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/c98a9dd010ce1ff25f84e17d8e156b76fd9c7988"
  },
  {
    title: "AWS Academy Cloud Architecting",
    issuer: "AWS",
    date: "Nov 2024",
    link: "https://www.credly.com/badges/aa9ba597-b69d-4ec2-9944-239bad74246c/linked_in_profile"
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford University",
    date: "Mar 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/4ZGKGZ7KJEO9"
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "Nov 2019",
    link: "https://www.coursera.org/account/accomplishments/certificate/PGMKE4RQ89TG"
  },
  {
    title: "Agile Software Development",
    issuer: "University of Minnesota",
    date: "Jan 2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/GEL8XDQ7LRDC"
  },
  {
    title: "PeopleSoft PeopleTools 8.5x Certified Implementation Specialist",
    issuer: "Oracle",
    date: "Sep 2021",
    link: "https://www.linkedin.com/in/shubham9199/overlay/Certifications/308808128/treasury/?profileId=ACoAABrZ2bwBT9wdlsxW2iSi568Zj1b3jGyAMbk"
  },
  {
    title: "Intermediate Technical Interview Prep",
    issuer: "CodePath",
    date: "Nov 2025",
    link: "https://www.linkedin.com/in/shubham9199/overlay/Certifications/957939629/treasury/?profileId=ACoAABrZ2bwBT9wdlsxW2iSi568Zj1b3jGyAMbk"
  },
  {
    title: "Intro to Web Development",
    issuer: "CodePath",
    date: "Nov 2025",
    link: "https://www.linkedin.com/in/shubham9199/overlay/Certifications/957796861/treasury/?profileId=ACoAABrZ2bwBT9wdlsxW2iSi568Zj1b3jGyAMbk"
  },
  {
    title: "HackerRank SQL(Intermediate) Certification",
    issuer: "HackerRank",
    date: "Mar 2025",
    link: "https://www.hackerrank.com/certificates/iframe/65e786191207"
  },
  {
    title: "HackerRank SQL(Basic) Certification",
    issuer: "HackerRank",
    date: "Mar 2025",
    link: "https://www.hackerrank.com/certificates/iframe/4c084acd7b64"
  },
  {
    title: "Successful Presentation",
    issuer: "University of Colorado",
    date: "Dec 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/RGSNSMW7SL7A"
  }
];

export type ProjectCategory = "All" | "AI/ML" | "Data" | "Full Stack";

export const projectCategories: ProjectCategory[] = ["All", "AI/ML", "Data", "Full Stack"];

/** Project IDs to show initially when "All" is selected (max 6). */
export const featuredProjectIds: number[] = [1, 9, 10, 13, 16, 14];

export const projects = [
  {
    id: 1,
    title: "Portfolio Project",
    des: "A high-performance portfolio website built with Next.js, Framer Motion, and Tailwind CSS.",
    img: "images/projects/portfolio_placeholder.png",
    icons: [
      { icon: SiTypescript, color: "#3178C6" },
      { icon: SiNextdotjs, color: "#000000" },
      { icon: SiTailwindcss, color: "#38B2AC" },
    ],
    link: "https://github.com/Shubham91999/portfolio",
    category: "Full Stack" as ProjectCategory,
  },
  {
    id: 2,
    title: "Economic Data Analysis",
    des: "Exploratory data analysis of US economic indicators including unemployment rates, labor participation, and S&P 500 performance with detailed visualizations.",
    img: "images/projects/economic_data_analysis.png",
    icons: [
      { icon: SiPython, color: "#3776AB" },
      { icon: SiChartdotjs, color: "#FF6384" },
    ],
    link: "https://github.com/Shubham91999/Economic_Data_Analysis.git",
    category: "Data" as ProjectCategory,
  },
  {
    id: 3,
    title: "London Bike Rides Analysis",
    des: "Data analysis and interactive visualization of London bike sharing trends using Python and Tableau.",
    img: "images/projects/london_bike_rides.png",
    icons: [
      { icon: SiPython, color: "#3776AB" },
      { icon: SiChartdotjs, color: "#FF6384" },
    ],
    link: "https://github.com/Shubham91999/LondonBikeRides_Analysis",
    category: "Data" as ProjectCategory,
  },
  {
    id: 4,
    title: "Electric Vehicle Data Analysis",
    des: "Analyzing Electric Vehicle (EV) adoption, market trends, and manufacturer performance across the United States.",
    img: "images/projects/ev_data_analysis.png",
    icons: [
      { icon: SiPython, color: "#3776AB" },
      { icon: SiChartdotjs, color: "#FF6384" },
    ],
    link: "https://github.com/Shubham91999/EV_DataAnalysis",
    category: "Data" as ProjectCategory,
  },
  {
    id: 5,
    title: "Car Sales Analytics Dashboard",
    des: "Analyzing car sales performance, regional distribution, and company-wise revenue trends.",
    img: "images/projects/car_sales_analytics.png",
    icons: [
      { icon: SiPython, color: "#3776AB" },
      { icon: SiChartdotjs, color: "#FF6384" },
    ],
    link: "https://github.com/Shubham91999/Car-Sales-Analytics",
    category: "Data" as ProjectCategory,
  },
  {
    id: 6,
    title: "HR Analytics Dashboard",
    des: "Interactive Tableau dashboard analyzing employee attrition trends. Uncovers workforce insights on turnover drivers, demographics, and job satisfaction to support data-driven HR strategies.",
    img: "images/projects/hr_analytics_dashboard.png",
    icons: [
      { icon: SiPython, color: "#3776AB" },
      { icon: SiChartdotjs, color: "#FF6384" },
    ],
    link: "https://github.com/Shubham91999/HR_Analytics_Dashboard",
    category: "Data" as ProjectCategory,
  },
  {
    id: 7,
    title: "US Border Crossing Analysis",
    des: "Visualizing the US Border Crossings through data. Python EDA + Interactive Tableau Dashboard.",
    img: "images/projects/us_border_crossing.png",
    icons: [
      { icon: SiPython, color: "#3776AB" },
      { icon: SiChartdotjs, color: "#FF6384" },
    ],
    link: "https://github.com/Shubham91999/US-Border-Crossing-Analysis",
    category: "Data" as ProjectCategory,
  },
  {
    id: 8,
    title: "Video Game Sales Analytics Dashboard",
    des: "Comprehensive Tableau dashboard visualizing global video game sales data, market trends, and industry KPIs.",
    img: "images/projects/video_game_sales.png",
    icons: [
      { icon: SiPython, color: "#3776AB" },
      { icon: SiChartdotjs, color: "#FF6384" },
    ],
    link: "https://github.com/Shubham91999/Sales_Analysis",
    category: "Data" as ProjectCategory,
  },
  {
    id: 9,
    title: "Cosmos Dashboard: Astronomical Visualization",
    des: "A modern, full-stack dashboard for exploring the stars. Transform raw astronomical data and FITS imagery into interactive, scientific visualizations.",
    img: "images/projects/cosmos_dashboard.png",
    icons: [
      { icon: SiPython, color: "#3776AB" },
      { icon: SiDocker, color: "#2496ED" },
      { icon: SiJavascript, color: "#F7DF1E" },
    ],
    link: "https://github.com/Shubham91999/Astronomical_Visualization",
    category: "AI/ML" as ProjectCategory,
  },
  {
    id: 10,
    title: "GenreSense",
    des: "An AI-powered music classification system. Effortlessly search, play, and identify music genres using a custom PCA + Logistic Regression pipeline.",
    img: "images/projects/genresense.png",
    icons: [
      { icon: SiPython, color: "#3776AB" },
      { icon: SiScikitlearn, color: "#F7931E" },
      { icon: SiTypescript, color: "#3178C6" },
      { icon: SiTailwindcss, color: "#38B2AC" },
    ],
    link: "https://github.com/Shubham91999/GenreSense",
    category: "AI/ML" as ProjectCategory,
  },
  {
    id: 11,
    title: "TaskAI",
    des: "A modern, feature-rich todo application built with React and TypeScript.",
    img: "images/projects/taskai.png",
    icons: [
      { icon: SiReact, color: "#61DAFB" },
      { icon: SiTypescript, color: "#3178C6" },
      { icon: SiNodedotjs, color: "#339933" },
      { icon: SiTailwindcss, color: "#38B2AC" },
    ],
    link: "https://github.com/Shubham91999/TaskAI",
    category: "Full Stack" as ProjectCategory,
  },
  {
    id: 12,
    title: "SocialPulse",
    des: "A scalable social media backend built with FastAPI, providing RESTful APIs for user authentication, posts, likes, and interactions, designed for high performance and clean architecture.",
    img: "images/projects/socialpulse.png",
    icons: [
      { icon: SiFastapi, color: "#05998B" },
      { icon: SiReact, color: "#61DAFB" },
      { icon: SiDocker, color: "#2496ED" },
      { icon: SiTailwindcss, color: "#38B2AC" },
    ],
    link: "https://github.com/Shubham91999/SocialMedia_FastAPI",
    category: "Full Stack" as ProjectCategory,
  },
  {
    id: 13,
    title: "AeroML",
    des: "A full-stack web application for predicting aerodynamic drag (CdA) based on truck configuration using machine learning. The application consists of a FastAPI backend and React frontend with a modern, responsive UI.",
    img: "images/projects/aeroml.png",
    icons: [
      { icon: SiFastapi, color: "#05998B" },
      { icon: SiReact, color: "#61DAFB" },
      { icon: SiDocker, color: "#2496ED" },
      { icon: SiTailwindcss, color: "#38B2AC" },
    ],
    link: "https://github.com/Shubham91999/Test-Aero",
    category: "AI/ML" as ProjectCategory,
  },
  {
    id: 14,
    title: "Credit Card Fraud Detection",
    des: "Deep learning–based binary classification model built with Keras to detect fraudulent credit card transactions.",
    img: "images/projects/fraud_detection.jpg",
    icons: [
      { icon: SiPython, color: "#3776AB" },
      { icon: SiTensorflow, color: "#FF6F00" },
      { icon: SiScikitlearn, color: "#F7931E" },
    ],
    link: "https://github.com/Shubham91999/Credit-Card-Fraud-Detection",
    category: "AI/ML" as ProjectCategory,
  },
  {
    id: 15,
    title: "SML: Regression and Classification",
    des: "Implementation and visualization of core Machine Learning algorithms — Linear Regression, Gradient Descent, and Logistic Regression.",
    img: "images/projects/sml_regression_classification.png",
    icons: [
      { icon: SiPython, color: "#3776AB" },
      { icon: SiScikitlearn, color: "#F7931E" },
    ],
    link: "https://github.com/Shubham91999/SML_Regression-Classification",
    category: "AI/ML" as ProjectCategory,
  },
  {
    id: 16,
    title: "CropSage",
    des: "Machine learning–based crop prediction system to recommend optimal crops based on soil, rainfall, and weather conditions.",
    img: "images/projects/cropsage.png",
    icons: [
      { icon: SiPython, color: "#3776AB" },
      { icon: SiScikitlearn, color: "#F7931E" },
    ],
    link: "https://github.com/Shubham91999/CropSage",
    category: "AI/ML" as ProjectCategory,
  },
  {
    id: 17,
    title: "House Price Prediction",
    des: "Data science pipeline to predict house prices: data preprocessing, feature engineering, model selection, and evaluation to find the best predictive model.",
    img: "images/projects/house_price_prediction.png",
    icons: [
      { icon: SiPython, color: "#3776AB" },
      { icon: SiScikitlearn, color: "#F7931E" },
    ],
    link: "https://github.com/Shubham91999/House_Price_Prediction",
    category: "AI/ML" as ProjectCategory,
  },
];
