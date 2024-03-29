import netflixclone from "./Images/netflixclone.png"
import covid19 from "./Images/covid19.png"
import evote from "./Images/evote.jpg"
import neocal from "./Images/neocal.png"
import placementCell from "./Images/placementCell.png"
import qrgen from "./Images/qrgen.png"
import youThoob from "./Images/youtube.png"
import wecode from "./Images/wecode.png"
import crypto from "./Images/crypto.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/portfolio23/',
  title: 'नमस्ते :)',
}
// use npm run deploy command for gh pages
const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vivek Sharma',
  role: 'Front End Engineer',
  resume: 'Vivek_Sharma_Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/vvksharrma/',
    github: 'https://github.com/vvksharrma',
  },
  description: `Experienced front-end developer with a proven track record in designing and developing web applications using a variety of frameworks. Highly skilled in collaborating with cross-functional teams, ensuring the successful delivery of top-notch projects. Committed to continuous professional advancement, and being up-to-date with industry trends and emerging technologies, constantly enhancing my skill set to stay ahead `,
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'E-Voting system',
    description:
      'Final year Academic project Online E-voting system using blockchain Technology smart contract Ethererium, Web 3, Metamsak, solidity',
    stack: ['react', 'Web3', 'Blockchain'],
    screenshot: evote,
    sourceCode: 'https://github.com/vvksharrma',
    livePreview: 'https://github.com/vvksharrma',
  },
  {
    name: 'We Code-Blog App',
    description:
      'MERN Full stack blog application with Auth create, Read, Edit, Post blogs with Rich Text Editor',
    stack: ['React', 'MongoDB', 'ExpressJS', 'Context-Api','vercel','MERN'],
    sourceCode: 'https://github.com/vvksharrma/wecode',
    screenshot: wecode,
    livePreview: 'https://wecodeblog.vercel.app/',
  },
  {
    name: 'Cryptic Base',
    description:
      'Cryptocurrency Tracker and information, trending coins with login and saving your favrouite coins',
    stack: ['React', 'Tailwind', 'Firebase', 'Context-Api'],
    screenshot: crypto,
    sourceCode: 'https://cryptotoday-6b0fb.web.app/',
    livePreview: 'https://cryptotoday-6b0fb.web.app/',
  },
  {
    name: 'Netflix Clone',
    description:
      'Netflix clone made with React and with firebase authentication, user login feature and multiple pages',
    stack: ['React', 'styled-component', 'redux-toolkit', 'Firebase'],
    screenshot: netflixclone,
    sourceCode: 'https://github.com/vvksharrma/Netflix-clone',
    livePreview: 'https://netflixop.netlify.app/',
  },
  {
    name: 'Corona Virus Tracker',
    description:
      'Web app using React that show users number of active Deceased and recovered cases of Covid-19 - open source API',
    stack: ['React', 'Basic', 'API', 'Router', 'GraphChart'],
    screenshot: covid19,
    sourceCode: 'https://github.com/vvksharrma/covid-19',
    livePreview: 'https://covid-statis.netlify.app/',
  },
  {
    name: 'Youtube Clone',
    description:
      'Youtube clone made with React and with firebase authentication, user login feature and multiple pages',
    stack: ['React', 'SASS', 'Redux', 'Firebase'],
    screenshot: youThoob,
    sourceCode: 'https://github.com/vvksharrma/youThoob',
    livePreview: 'https://youthoob-omega.vercel.app/',
  },
  {
    name: 'QR Code generator',
    description:
      'Simple website to convert link into QR code which have multiple use cases built using javascript ',
    stack: ['HTML', 'CSS', 'Javascript'],
    screenshot: qrgen,
    sourceCode: 'https://github.com/vvksharrma/QRgenerator',
    livePreview: 'https://qrcode333.netlify.app/',
  },
  {
    name: 'NeoMorphish',
    description: 'Neomorphism design basic simple calculator',
    stack: ['HTML', 'CSS', 'Javascript'],
    screenshot: neocal,
    sourceCode: 'https://github.com/vvksharrma/NeoCalc',
    livePreview: 'https://vvksharrma.github.io/NeoCalc/',
  },
  {
    name: 'HNBGU Placement Cell',
    description:
      'The system is an online application for the Training and Placement Dept. of the college that can be accessed throughout the organization',
    stack: ['HTML', 'CSS', 'Bootstrap', 'php'],
    screenshot: placementCell,
    sourceCode: 'https://github.com/vvksharrma/PlacementCell',
    livePreview: 'https://github.com/vvksharrma/PlacementCell',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Redux-Toolkit',
  'Context Api',
  'Typescript',
  'Next JS',
  'React Native',
  'Unit Testing',
  'Jest',
  'firebase',
  'NodeJS',
  'Express',
  'MySQL',
  'MongoDB',
  'GraphQL',
  'Bootstrap',
  'MUI',
  'Chakra UI',
  'Tailwind',
  'SASS',
  'Git',
  'Github',
  'UI/UX',
  'CI/CD',
  'Jenkins',
  'Cloud',
  'Wenpack',
  'DOM',
  'MFE'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vvk17sharma@gmail.com',
}

export { header, about, projects, skills, contact }
