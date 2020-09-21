import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alexander Chernikhov | Python Backend Developer', // e.g: 'Name | Developer'
  lang: 'en, ru', // e.g: en, es, fr, jp
  description: 'Alexander Chernikhov | Python Backend Developer Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Alexander',
  subtitle: 'I am a Python Backend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Worked with:\
  - Python\
  - Django\
  - DRF\
  - PostgreSQL\
  - React\
  - Git\
  - CSS\
  - HTML',
  paragraphTwo: 'Conversational English level. Strong knowledge of Django.',
  paragraphThree: 'I provide easily-to-maintain projects using PEP8, comments, and programming best practices. I am constantly learning something new and trying to improve my understanding of already known components.',
  resume: 'https://www.linkedin.com/in/alex-cher/?locale=en_US', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'subov_net.png',
    title: 'Torrent movies',
    info: 'Easily populate data using JSON. Get that data you can using YTS API.',
    info2: 'Features: populate movies via API, collections, merch, cast, random movies on the main page, latest movies.',
    url: 'http://subov.net',
    repo: 'https://github.com/Kant1742/torrent/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'podcast-shop.png',
    title: 'Blog/shop',
    info: 'Podcast episodes info, shop related to these podcasts.',
    info2: 'Features: API, shop, tags, cache, users, sending emails via celery, middlewares, context processors, templatetags, basic tests, optimisation techniques.',
    url: '',
    repo: 'https://github.com/Kant1742/podcast-empire', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Have any question? Write to me',
  btn: 'Contact',
  email: 'qazwsxedc19909@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alex-cher/?locale=en_US',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Kant1742',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
