export const details = {
  name: 'Aashish Bhatt',
  title: ['Software Developer'],
  image: 'https://avatars.githubusercontent.com/u/86340075?v=4',
};

export const about = {
  description:
    'I am currently pursuing B.E in Computer Engineering from Institute of Engineering(IOE), Dharan, Nepal.',
};
export const aboutData = [
  // experience: '3 years',
  // education: 'Bachelor of Engineering',
  // projects: '31',
  { name: 'experience', value: '2 years', icon: 'bx-calendar-check' },
  {
    name: 'education',
    value: 'Bachelor of Engineering (ongoing)',
    icon: 'bx-calendar-check',
  },
  { name: 'projects', value: '27', icon: 'bx-calendar-check' },
];
export const contact = [
  {
    icon: 'email',
    boxicon: 'bx-mail-send',
    value: 'bhattaashish303@gmail.com',
    link: 'mailto:bhattaashish303@gmail.com',
  },
  {
    icon: 'phone',
    boxicon: 'bx-phone-call',
    value: '+977-9844682742',
    link: 'tel:+977-9844682742',
  },
  {
    icon: 'location',
    boxicon: 'bx-location-plus',
    value: 'Kathmandu, Nepal',
    link: 'https://maps.google.com',
  },
];
export const social = [
  { icon: 'bxl-facebook', url: 'https://www.facebook.com/aashish.cd' },
  { icon: 'bxl-twitter', url: 'https://www.twitter.com/aashish_cd' },
  { icon: 'bxl-linkedin', url: 'https://www.linkedin.com/in/aashish-cd' },
  { icon: 'bxl-instagram', url: 'https://www.instagram.com/aashish.cd' },
  { icon: 'bxl-github', url: 'https://www.github.com/aashish-cd' },
];
export const experience = [
  {
    name: 'Frontend Web Developer',
    skills: [
      {
        name: 'HTML',
        level: 'Advanced',
      },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'JS', level: 'Advanced' },
      { name: 'React.js', level: 'Advanced' },
      { name: 'Bootstrap', level: 'Intermediate' },
      { name: 'Tailwind', level: 'Intermediate' },
    ],
  },
  {
    name: 'Backend  developer',
    skills: [
      {
        name: 'Node.js',
        level: 'Advanced',
      },
      { name: 'Express.js', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'CI / CD', level: 'Intermediate' },
    ],
  },
  {
    name: 'Full Stack Developer',
    skills: [
      {
        name: 'MERN Stack',
        level: 'Advanced',
      },
      { name: 'Git', level: 'Intermediate' },
      { name: 'GitHub', level: 'Advanced' },
      { name: 'CI / CD pipeline', level: 'Intermediate' },
    ],
  },
  {
    name: 'Mobile App Developer',
    skills: [
      {
        name: 'React Native',
        level: 'Intermediate',
      },
      { name: 'Android Studio', level: 'Intermediate' },
      { name: 'Progressive Web App (pwa)', level: 'Intermediate' },
    ],
  },
];

export const service = [
  {
    name: 'Web Development',
    description:
      'service with more than 3 years of experience. providing quality work to cliets and comapanies',
    serviceList: [
      'I will do web development using React.js',
      // 'web page developemnt',
      // 'i create ux element interactions',
      // 'i position your company brand',
      // 'design and mockups of products for companies',
    ],
  },
  {
    name: 'Full Stack Web Development',
    description:
      'service with more than 3 years of experience. providing quality work to cliets and comapanies',
    serviceList: ['I will built full stack website using MERN Stack'],
  },
  {
    name: 'Mobile App Development',
    description:
      'service with more than 3 years of experience. providing quality work to cliets and comapanies',
    serviceList: ['I will do mobile app development using React Native'],
  },
];

export const workCategory = ['react.js', 'next.js', 'typescript'];
export const works = [
  {
    name: 'todo-app',
    image: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
    category: 'react',
  },
  {
    name: 'hackathon',
    image: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
    category: ' next',
  },
  {
    name: 'recipe-app',
    image: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
    category: 'react',
  },
  {
    name: 'youtube-clone-api',
    image: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
    category: 'next',
  },
  {
    name: 'portfolio ',
    image: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
    category: 'next typescript',
  },
];

export const testimonial = [
  {
    name: 'Sarthak parajuli',
    title: 'CEO at Ace Studios Nepal',
    image: 'https://avatars.githubusercontent.com/u/46929074?v=4',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
  },

  {
    name: 'Nischal joshi',
    title: 'CSO at Ace Studios Nepal',
    image: 'https://avatars.githubusercontent.com/u/60282678?v=4',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
  },
  {
    name: 'kushal adhikari',
    title: 'Founder at Kushal.graphics',
    image: 'https://avatars.githubusercontent.com/u/47110030?v=4',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
  },
];
// AiOutlineHome, // home
// AiOutlineUser, // about
// AiOutlineMessage, // contact
// AiOutlineProject, // works
// HiOutlineBriefcase, //experience
export const navbar = [
  { name: 'home', link: '/', icon: 'bx-home', ref: 'homeRef' },
  { name: 'about', link: '/about', icon: 'bx-user', ref: 'aboutRef' },
  {
    name: 'experience',
    link: '/experience',
    icon: 'bx-briefcase',
    ref: 'experienceRef',
  },
  // { name: 'services', link: '/services', icon: 'services-favicon' },
  { name: 'works', link: '/works', icon: 'bx-award', ref: 'workRef' },

  {
    name: 'contact',
    link: '/contact',
    icon: 'bx-message-dots',
    ref: 'contactRef',
  },
];
