const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/portfolio23/',
  title: 'नमस्ते :)',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vivek Sharma',
  role: 'Front End Engineer',
  resume: 'Vivek_Sharma_Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/vvksharrma/',
    github: 'https://github.com/vvksharrma',
  },
  description: `Experienced front-end developer with a proven track record in designing and developing web 
  applications using a variety of frameworks. Highly skilled in collaborating with
  cross-functional teams, ensuring the successful delivery of top-notch projects. Committed to
  continuous professional advancement, and being up-to-date with industry trends and
  emerging technologies, constantly enhancing my skill set to stay ahead `,
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Netflix Clone',
    description:
      'Netflix clone made with React and with firebase authentication, user login feature and multiple pages',
    stack: ['React', 'styled-component', 'redux-toolkit', 'Firebase'],
    screenshot: '../Images/netflixclone.png',
    sourceCode: 'https://github.com/vvksharrma/Netflix-clone',
    livePreview: 'https://netflixop.netlify.app/',
  },
  {
    name: 'Cryptic Base',
    description:
      'Cryptocurrency Tracker and information, trending coins with login and saving your favrouite coins',
    stack: ['React', 'Tailwind', 'Firebase', 'Context-Api'],
    sourceCode: 'https://cryptotoday-6b0fb.web.app/',
    livePreview: 'https://cryptotoday-6b0fb.web.app/',
  },
  {
    name: 'We Code-Blog App',
    description:
      'Full stack blog application with Auth create, Read, Edit, Post blogs with Rich Text Editor',
    stack: ['React', 'MongoDB', 'ExpressJS', 'Context-Api','vercel','MERN'],
    sourceCode: 'https://github.com/vvksharrma/wecode',
    livePreview: 'https://wecodeblog.vercel.app/',
  }
  {
    name: 'Corona Virus Tracker',
    description:
      'Web app using React that show users number of active Deceased and recovered cases of Covid-19 - open source API',
    stack: ['React', 'Basic', 'API', 'Router', 'GraphChart'],
    sourceCode: 'https://github.com/vvksharrma/covid-19',
    livePreview: 'https://covid-statis.netlify.app/',
  },
  {
    name: 'QR Code generator',
    description:
      'Simple website to convert link into QR code which have multiple use cases built using javascript ',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/vvksharrma/QRgenerator',
    livePreview: 'https://qrcode333.netlify.app/',
  },
  {
    name: 'NeoMorphish Calculator',
    description: 'Neomorphism design basic simple calculator',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/vvksharrma/NeoCalc',
    livePreview: 'https://vvksharrma.github.io/NeoCalc/',
  },
  {
    name: 'E-Voting system',
    description:
      'Final year Academic project Online E-voting system using blockchain Technology smart contract Ethererium, Web 3, Metamsak, solidity',
    stack: ['react', 'Web3', 'Blockchain'],
    sourceCode: 'https://github.com/vvksharrma',
    livePreview: 'https://github.com/vvksharrma',
  },
  {
    name: 'Placement Cell Web Portal',
    description:
      'The system is an online application for the Training and Placement Dept. of the college that can be accessed throughout the organization',
    stack: ['HTML', 'CSS', 'Bootstrap', 'php'],
    sourceCode: 'https://github.com/vvksharrma/PlacementCell',
    livePreview: 'https://github.com/vvksharrma/PlacementCell',
  },
  {
    name: 'Youtube Clone',
    description:
      'Youtube clone made with React and with firebase authentication, user login feature and multiple pages',
    stack: ['React', 'SASS', 'Redux', 'Firebase'],
    screenshot: '../public/Images/netflixclone.png',
    sourceCode: 'https://github.com/vvksharrma/youThoob',
    livePreview: 'https://github.com/vvksharrma/youThoob',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Typescript',
  'Next JS',
  'React Native',
  'Unit Testing',
  'Jest',
  'firebase',
  'SASS',
  'Git',
  'Github',
  'UI/UX',
  'CI/CD',
  'Jenkins',
  'Cloud',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vvk17sharma@gmail.com',
}

export { header, about, projects, skills, contact }
