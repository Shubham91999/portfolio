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
  SiDocker, SiKubernetes, SiGooglecloud, SiApachekafka
} from "react-icons/si";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const siteMetadata = {
  title: 'Shubham Kulkarni | Portfolio',
  description: 'Software Engineer specializing in Full-Stack Development, AI/ML, and Backend Systems.',
  author: 'Shubham Kulkarni',
  siteUrl: 'https://shubhamkulkarni.com', // Placeholder
  twitterHandle: '@shubham9199', // Placeholder
  email: 'skulka86@asu.edu',
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
  bio: 'Software Engineer who loves Data, Machine Learning and Generative AI. I build scalable, intelligent solutions with precision.',
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
      { name: "Java", icon: FaJava, color: "#007396" },
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
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
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
      { name: "LangChain", icon: FaBrain, color: "#121212" },
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
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
    ]
  },
  {
    category: "Other",
    skills: [
      { name: "DSA", icon: FaCode, color: "#000000" },
      { name: "OOP", icon: FaCubes, color: "#000000" },
      { name: "Design Patterns", icon: FaProjectDiagram, color: "#000000" },
      { name: "Agile Development", icon: FaSync, color: "#000000" },
      { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
    ]
  }
];

// Placeholders for Projects, Education, and Experience (to be updated later)
export const experiences = [
  {
    title: "Software Engineer",
    company: "Placeholder Company",
    location: "Seattle, WA",
    type: "Full-time",
    date: "2024 - Present",
    skills: ["React", "Node.js", "AWS"],
  },
];

export const education = [
  {
    title: "Master of Science in Computer Science",
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
    institution: "Mumbai University",
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
    institution: "Government Polytechnic Thane",
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

export const projects = [
  {
    id: 1,
    title: "AI Portfolio Project",
    des: "A high-performance portfolio website built with Next.js, Framer Motion, and Tailwind CSS.",
    img: "images/projects/project1.jpg",
    icons: [
      { icon: SiTypescript, color: "#3178C6" },
      { icon: SiNextdotjs, color: "#000000" },
      { icon: SiTailwindcss, color: "#38B2AC" },
    ],
    link: "https://github.com/Shubham91999/portfolio",
  },
];
