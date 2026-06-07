import {
    mobile,
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
    git,
    figma,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    travelwin,
    drop,
    bootstrap,
    next,
    mui,
    bigscal,
    sigma,
    sonyworld,
    differentdog,
    lynit,
    docusightai
    // nodejs,
    // mongodb,
    // docker,
    // threejs,
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
        title: "React Developer",
        icon: web,
    },
    {
        title: "Next JS Developer",
        icon: mobile,
    },
    {
        title: "Web Developer",
        icon: backend,
    },
    {
        title: "Responsive Design",
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Next JS",
        icon: next,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    // {
    //     name: "Node JS",
    //     icon: nodejs,
    // },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Mui",
        icon: mui,
    }
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Bigscal Technologies Pvt. Ltd.",
        role: "(Team Leader)",
        icon: bigscal,
        iconBg: "#f80000",
        date: "Sept. 2020 - Dec. 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Mid Senior React Developer",
        company_name: "Sigma Solve Ltd.",
        icon: sigma,
        iconBg: "#fff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Sony World",
        description: "SonyWorld is a dynamic online e-commerce platform that showcases and retails a wide array of cutting-edge electrical gadgets and products.",
            // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "redux",
                color: "pink-text-gradient",
            },
        ],
        image: sonyworld,
        source_code_link: "https://sonyworld.sa/en-sa/",
    },
    {
        name: "Travel.Win",
        subtext: "CMS tool",
        description:
            "Travel.win provides a cutting-edge platform for creating a tailored online travel and car rental website, featuring comprehensive capabilities for multi-currency support, commission management, and strategic partnership engagement",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "cms",
                color: "pink-text-gradient",
            },
        ],
        image: travelwin,
        source_code_link: "https://www.travel.win/",
    },
    {
        name: "Drop Travel",
        subtext: "Travel win",
        description:
            "A comprehensive travel booking platform that allows users to book hotels and rental cars, and provide strong support for multiple currencies and languages",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "SaaS",
                color: "pink-text-gradient",
            },
        ],
        image: drop,
        source_code_link: "https://drop2.staging-1.app.travel.win/",
    },
    {
        name: "DifferentDog",
        description:
            "A custom-built web application designed to facilitate a seamless and user-friendly experience for customers seeking high-quality, personalized dog food subscriptions.",
        tags: [
            {
                name: "gatsby",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "builder.io",
                color: "pink-text-gradient",
            },
        ],
        image: differentdog,
        source_code_link: "https://www.differentdog.com/",
    },
    {
        name: "Lynit",
        description:
            "Lynit is a comprehensive writing visualization platform that offers intuitive outlining, personalized recommendations, and collaborative features to empower authors.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "graphql",
                color: "green-text-gradient",
            },
            {
                name: "D3",
                color: "pink-text-gradient",
            },
            {
                name: "quill",
                color: "blue-text-gradient",
            },
            {
                name: "dnd-kit",
                color: "green-text-gradient",
            },
        ],
        image: lynit,
        source_code_link: "https://www.lynit.app/",
    },
    {
        name: "DocuSight AI",
        description:
            "The cutting-edge AI platform that offers document analysis, summarization, and personalized insights to optimize professional and educational study.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "typescipt",
                color: "green-text-gradient",
            },
            {
                name: "mui",
                color: "pink-text-gradient",
            },
        ],
        image: docusightai,
        source_code_link: "https://docusightai.com/",
    },
];

const contacts = [
    {
        title: "linkedin",
        icon: "/assets/icons/linkedin.svg",
        link: "https://www.linkedin.com/in/kaushal-chauhan-k1810/"
    },
    {
        title: "github",
        icon: "/assets/icons/github.svg",
        link: "https://github.com/kaushal1474"
    },
    {
        title: "email",
        icon: "/assets/icons/email.svg",
        link: "mailto:kaushalchauhan1474@gmail.com"
    },

]

export { services, technologies, experiences, testimonials, projects, contacts };