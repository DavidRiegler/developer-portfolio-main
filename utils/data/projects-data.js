import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Car Tuning Configurator',
        description: "Me and a friend built a Car Tuning Configurator web-application. I have developed API using Express, Mongoose and MongoDB. It's a dynamic and interactive web interface built with React for users to create, edit, and manage car tuning configurations.",
        tools: ['React, Tailwind CSS, Node.js, Express, Mongoose, MongoDB'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app using NextJS, TailwindCSS, Google Maps and React Slick. I developed the API using REST API to handle data requests from the frontend.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Twitter Clone APP',
        description: 'Using Prisma, I defined models for users, tweets, likes, follows, and other entities. NextAuth.js was set up to handle user sign-up, login, and session management. Next.js API routes were used to create RESTful endpoints for fetching and manipulating data. Prisma was used to interact with the database.',
        tools: ['React', 'Tailwind', 'Next', 'Prisma', 'MongoDB', 'NextAuth', 'Vercel'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    }
];
