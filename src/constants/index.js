import {
    
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    expify,
    Voiceback,
    unnati,

    carrent,
    jobit,
    locopoco,
    threejs,
    gymbuddy,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: " Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Backend Developer",
      company_name: "Expify ",
      icon: expify,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - June 2023",
      points: [
      "Integrated Razorpay’s API for the payment section of their website, ensuring secure and efficient transactions.",
      "Managed and maintained the database using MySQL.",
      "Developed an OTP system for user sign-up and registrations, enhancing security.",
      "Initially held a marketing role, pitching the startup idea to investors.",
      "Served as a Campus Ambassador, promoting the startup within the campus community.",

      ],
    },
    {
      title: "Backend Developer",
      company_name: "Unnati Agritech",
      icon: unnati,
      iconBg:"#44b200",
      date: "June 2023",
      points: [
      "Utilized Docker for maintaining and updating my progress to senior developers.",
      "Developed and enhanced backend functionalities using JavaScript.",
      "Managed and maintained database infrastructure using MongoDB, and created data pipelines to streamline processes."

        
      ],
    },
    
    {
      title: "Data Analyst",
      company_name: "Voiceback Analyst",
      icon: Voiceback,
      iconBg: "#383E56",
      date: "June 2024",
      points: [
        "Analyzed real-time sales data from Theobroma to derive actionable insights.",
        "Developed models for visualizing sales data for individual sites and various items.",
        "Created comprehensive visualizations for comparative analysis across multiple sites.",
        "Implemented predictive models such as ARIMA and XGBoost to forecast sales for upcoming months."
      ],
    },
    
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Loco-poco",
      description:
        "A web application that helps you manage your 'To-do' list by tracking your live latitude and longitude, and providing reminders based on your proximity to saved locations.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: locopoco,
      source_code_link: "https://github.com/radhikagujral/loco-poco.git",
    },
    {
      name: "Muscle Master",
      description:
        " A gym app that allows you to select specific muscle groups.It dynamically suggests new exercises ,maximum rest time between reps while keeping a track of the sets you've completed ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gymbuddy,
      source_code_link: "https://github.com/radhikagujral/gymbuddy.git",
    },
    
  ];
  
  export { services, technologies, experiences, projects };