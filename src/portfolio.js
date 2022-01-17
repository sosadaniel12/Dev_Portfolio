const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://sosadaniel12.github.io/Dev_Portfolio',
  title: 'DS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Daniel Sosa',
  role: 'Full Stack Developer',
  description:
    'Well-qualified Full Stack Developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease. Collaborative team player with excellent technical abilities.',
  resume:
    'https://docs.google.com/document/d/1c5QxO37uOoZKw-w4S7e0juFNFwHDhLNKHkFuAsdCHww/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/daniel-sosa-a940381b9/',
    github: 'https://github.com/sosadaniel12',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Splash Chat',
    description:
      'User are to able to log in and chat with their friends around the world.',
    stack: ['CSS', 'MongoDB', 'React', 'Socket.io'],
    sourceCode: 'https://github.com/sosadaniel12/Splash_Chat_io',
    livePreview: 'https://safe-stream-65170.herokuapp.com/',
  },
  {
    name: 'MERN E-Commerce',
    description:
      'An ECommerce site built with the MERN stack. Users can add products to cart and use Stripe for payment.',
    stack: ['GraphQL', 'MongoDB', 'React', 'Express'],
    sourceCode: 'https://github.com/sosadaniel12/MERN-E-Commerce',
    livePreview: 'https://salty-fortress-89051.herokuapp.com/',
  },
  {
    name: 'Movie Finder',
    description:
      'Application that allows users to search for movies and shows. ',
    stack: ['HTML', 'CSS', 'Javascript', 'JQuery'],
    sourceCode: 'https://github.com/sosadaniel12/movieFinder',
    livePreview: 'https://sosadaniel12.github.io/movieFinder/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'CSS',
  'Git',
  'GraphQL',
  'Jest',
  'MySQL',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'danielsosa2121@gmail.com',
}

export { header, about, projects, skills, contact }
