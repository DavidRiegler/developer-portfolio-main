import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Car Tuning Configurator',
        description: "Me and a friend built a Car Tuning Configurator web-application. I have developed API using Express, Mongoose and MongoDB. It's a dynamic and interactive web interface built with React for users to create, edit, and manage car tuning configurations. The application allows users to select car models, customize tuning options, and save their configurations. The frontend is built with React and Tailwind CSS, providing a responsive and user-friendly experience. The backend is powered by Node.js, Express, Mongoose, and MongoDB, ensuring efficient data handling and storage.",
        tools: ['React, Tailwind CSS, Node.js, Express, Mongoose, MongoDB'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Meetup Planner',
        description: 'I have designed and developed a full-stack web app using NextJS, CSS and Firebase. I developed the API using REST API to handle data requests from the frontend. Firebase Firestore was used for the database. As a full-stack developer, I implemented user authentication using Firebase Authentication. The app allows users to create, join, and manage meetups, providing a platform for event organization and community engagement. The frontend was built with NextJS, ensuring a responsive and user-friendly interface. The app is deployed on Vercel, ensuring high availability and performance. ',
        tools: ['NextJS', 'CSS', "Firebase", "Firestore", "TypeScript", "REST API"],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://meetup-planner-main.vercel.app/',
        image: travel,
    },
    {
        id: 3,
        name: 'Twitter Clone APP',
        description: 'Using Prisma, I defined models for users, tweets, likes, follows, and other entities. NextAuth.js was set up to handle user sign-up, login, and session management. Next.js API routes were used to create RESTful endpoints for fetching and manipulating data. Prisma was used to interact with the database. The frontend was built with React and Tailwind CSS, providing a responsive and user-friendly interface. The app allows users to create accounts, post tweets, like tweets, and follow other users. The app is deployed on Vercel, ensuring high availability and performance.',
        tools: ['React', 'Tailwind', 'Next', 'Prisma', 'MongoDB', 'NextAuth', 'Vercel'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    }
];
