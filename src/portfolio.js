/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shivam's Portfolio",
  description:
    "A passionate developer focused on building scalable, user-centric solutions, blending technical skills with real-world impact, and a drive for continuous growth.",
  og: {
    title: "Shivam Chourasia Portfolio",
    type: "website",
    url: "https://github.com/Shivam-Courasia",
  },
};

//Home Page
const greeting = {
  title: "Shivam chourasia",
  logo_name: "ShivamChourasia",
  nickname: "MERN Stack Devloper",
  subTitle:
    "A passionate developer focused on building scalable, user-centric solutions, blending technical skills with real-world impact, and a drive for continuous growth.",
  resumeLink:
    "https://drive.google.com/file/d/1WHreWNjQs_ty5wmZMtYAKNGDRb5hv1mM/view?usp=sharing",
  portfolio_repository: "https://github.com/Shivam-Courasia",
  githubProfile: "https://github.com/Shivam-Courasia",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Shivam-Courasia",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shivam-chourasia-60281b254/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:shivamchourasia0002@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/Nimish_3012",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Google Cloud",
    link: "",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shiv_am0868/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Front-End Development",
      fileName: "FrontendDevImg",
      skills: [
        "⚡ Developing responsive and dynamic web applications using React.js and modern frontend technologies",
        "⚡ Internship experience building and maintaining scalable frontend projects with a focus on clean UI/UX design",
        "⚡ Familiar with component-driven development, API integration, and state management libraries like Redux",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "file-icons:tailwind",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "devicon:postman",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Deploy containerized Node.js applications on Azure Kubernetes Service (AKS) using Docker and YAML manifests",
        "⚡ Manage cloud infrastructure with a DevOps-focused approach to scalability, service exposure, and reliability",
        "⚡ Utilize foundational DevOps practices for orchestrating deployments and environment configuration",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AKS",
          fontAwesomeClassname: "skill-icons:azure-light",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        // {
        //   skillName: "Adobe Illustrator",
        //   fontAwesomeClassname: "simple-icons:adobeillustrator",
        //   style: {
        //     color: "#FF7C00",
        //   },
        // },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Goverment Holkar Science Collage,Indore",
      subtitle: "Bachelor of Computer Applications",
      logo_path: "clg_logo.jpeg",
      alt_name: "holkar science collage",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, Algorithms, DBMS, Operating Systems, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Science curriculum. ",
      ],
      website_link: "https://collegeholkar.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Academy Cloud Foundations",
      subtitle: "- Amazon",
      logo_path: "AWS_CF1.png",
      certificate_link: "",
      alt_name: "AWS Academy",
      color_code: "#D6DBDF",
    },
    {
      title: "Database Management System",
      subtitle: "- Udemy",
      logo_path: "DBMS.png",
      certificate_link: "",
      alt_name: "Microsoft",
      color_code: "#2A73CC",
    },

    {
      title: "AWS Academy ML Foundations",
      subtitle: "- Amazon",
      logo_path: "AWS_CF1.png",
      certificate_link: "",
      alt_name: "AWS Academy",
      color_code: "#D6DBDF",
    },
    {
      title: "Pub/Sub Skill Badge",
      subtitle: "- Google Cloud",
      logo_path: "gcp_logo.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "OOPS & DSA with C++",
      subtitle: "- OCSALLY Academy",
      logo_path: "cpp.png",
      certificate_link: "",
      alt_name: "UDEMY",
      color_code: "#1F70C199",
    },
    {
      title: "Sentiment with Natural Language",
      subtitle: "- Google Cloud",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "C Programming",
      subtitle: "- IIT Bombay",
      logo_path: "IITB.png",
      certificate_link: "",
      alt_name: "IITB",
      color_code: "#FFCCBC",
    },

    {
      title: "Git Command Line",
      subtitle: "- Udemy",
      logo_path: "git.png",
      certificate_link: "",
      alt_name: "IBM",
      color_code: "#f7786b",
    },
    {
      title: "HTML Programming",
      subtitle: "- IIT Bombay",
      logo_path: "IITB.png",
      certificate_link: "",
      alt_name: "IITB",
      color_code: "#FFCCBC",
    },

    //   {
    //     title: "DL on Tensorflow",
    //     subtitle: "- Laurence Moroney",
    //     logo_path: "deeplearning_ai_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //     alt_name: "deeplearning.ai",
    //     color_code: "#00000099",
    //   },
    //   {
    //     title: "Fullstack Development",
    //     subtitle: "- Jogesh Muppala",
    //     logo_path: "coursera_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //     alt_name: "Coursera",
    //     color_code: "#2A73CC",
    //   },
    //   {
    //     title: "Kuberenetes on GCP",
    //     subtitle: "- Qwiklabs",
    //     logo_path: "gcp_logo.png",
    //     certificate_link:
    //       "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //     alt_name: "GCP",
    //     color_code: "#4285F499",
    //   },
    //   {
    //     title: "Cryptography",
    //     subtitle: "- Saurabh Mukhopadhyay",
    //     logo_path: "nptel_logo.png",
    //     certificate_link:
    //       "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //     alt_name: "NPTEL",
    //     color_code: "#FFBB0099",
    //   },
    //   {
    //     title: "Cloud Architecture",
    //     subtitle: "- Qwiklabs",
    //     logo_path: "gcp_logo.png",
    //     certificate_link:
    //       "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //     alt_name: "GCP",
    //     color_code: "#4285F499",
    //   },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've had the privilege of working with a variety of organizations, from dynamic startups to established companies, where I've contributed to diverse projects and gained valuable experience in the tech industry.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        // {
        //   title: "Associate Software Engineer",
        //   company: "Legato Health Technologies",
        //   company_url: "https://legatohealth.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "June 2020 - PRESENT",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "I am working on a ASK-CES, an AI driven enterprise search engine which retrieves information from documents using Large Language Models and finds the answer to the user query. We are using Retrieval Augmented Generation to build our Question Answering System.",
        //   color: "#0879bf",
        // },
        {
          title: "Software Engineer",
          company: "Shivam Chourasia",
          company_url:
            "https://www.linkedin.com/in/shivam-chourasia-60281b254/",
          logo_path: "geekster_logo.avif",
          duration: "April 2023 - December 2024",
          location: "Work From Home",
          description:
            "As part of an intensive training program at Geekster, I honed my skills in full-stack web development using MongoDB, Express.js, React, and Node.js.. I worked on real-world projects that emphasized clean architecture, modular design, and scalable APIs. The program deepened my understanding of front-end and back-end integration, state management in React, RESTful APIs, and performance optimization.",
          color: "#9b1578",
        },
        // {
        //   title: "Software Engineer Intern",
        //   company: "Innovative Tech.",
        //   company_url: "https://www.linkedin.com/in/nimish-sahu-a611a1224/",
        //   logo_path: "saayaHealthLogo.png",
        //   duration: "April 2024 - June 2024",
        //   location: "Work from Home",
        //   description:
        //     "I am working on building a Web-RTC enabled video conferencing platform and a mobile app which enables speech to text conversion with real time chat translation.",
        //   color: "#fc1f20",
        // },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "React Frontend Developer",
    //       company: "Coding Judge",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "June 2023 - Present",
    //       location: "San Jose, CA, USA",
    //       description:
    //         "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
    //       color: "#000000",
    //     },
    //     // {
    //     //   title: "Machine Learning Intern",
    //     //   company: "TikTok Inc.",
    //     //   company_url: "https://www.tiktok.com/en/",
    //     //   logo_path: "tiktok_logo.png",
    //     //   duration: "May 2022 - Aug 2022",
    //     //   location: "San Francisco, USA",
    //     //   description:
    //     //     "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //     //   color: "#000000",
    //     // },
    //     // {
    //     //   title: "Data Science Research Intern",
    //     //   company: "Delhivery Pvt. Ltd.",
    //     //   company_url: "https://www.delhivery.com/",
    //     //   logo_path: "delhivery_logo.png",
    //     //   duration: "May 2019 - Sept 2019",
    //     //   location: "Gurgaon, Haryana",
    //     //   description:
    //     //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //     //   color: "#ee3c26",
    //     // },
    //     // {
    //     //   title: "Data Science Intern",
    //     //   company: "Intel Indexer LLC",
    //     //   company_url:
    //     //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //     //   logo_path: "intel_logo.jpg",
    //     //   duration: "Nov 2018 - Dec 2018",
    //     //   location: "Work From Home",
    //     //   description:
    //     //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //     //   color: "#0071C5",
    //     // },
    //   ],
    // },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Placement Coordinator",
          company: "Holkar Science Collage Indore, Madhya Pradesh",
          company_url: "https://collegeholkar.org/",
          logo_path: "clg_logo.jpeg",
          duration: "Aug 2023 - May 2024",
          location: "Indore, Madhya Pradesh",
          description:
            "As a Student Placement Coordinator, I am responsible for coordinating with companies for campus placements, organizing placement drives, and assisting students in their preparation for interviews. I work closely with the university's placement cell to ensure a smooth and successful placement process for all students.",
          color: "#4285F4",
        },
        {
          title: "Discipline or Hospitality Committee – College Events",
          company: "Holkar Science Collage Indore, Madhya Pradesh",
          company_url: "https://collegeholkar.org/",
          logo_path: "clg_logo.jpeg",
          duration: "March 2022 - May 2023",
          location: "Indore, Madhya Pradesh",
          description:
            "Assisted in managing guest hospitality, guiding attendees, and maintaining decorum during large-scale college functions. Played a key role in ensuring a welcoming and organized environment.",
          color: "#34A853",
        },
        // {
        //   title: "Google Explore ML Facilitator",
        //   company: "Google",
        //   company_url: "https://about.google/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const achievementsHeader = {
  title: "Achievements",
  description:
    "I'm passionate about the tech ecosystem and am proud to have been recognized for my contributions and achievements in various competitions and hackathons.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Shivam_logo.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9425947781",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    subtitle: "LIG Nanda nagar, Indore, MP, India",
    locality: "Indore",
    country: "India",
    region: "Madhya Pradesh",
    postalCode: "452012",
    streetAddress: "LIG Square",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/8,+LIG+Main+Rd,+Nanda+Nagar,+Indore,+Madhya+Pradesh+452011/@22.7430348,75.8754207,17z/data=!4m9!1m2!2m1!1sLIG+Main+gali+no.8!3m5!1s0x3962fd60b68b724b:0xcec2205c16a85e08!8m2!3d22.7430348!4d75.8754207!15sChJMSUcgTWFpbiBnYWxpIG5vLjiSARBnZW9jb2RlZF9hZGRyZXNz4AEA?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  achievementsHeader,
  contactPageData,
};
