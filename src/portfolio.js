const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'नमस्ते :)',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vivek Sharma',
  role: 'Front End Engineer',
  resume: 'resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/vvksharrma/',
    github: 'https://github.com/vvksharrma',
  },
  description: `I am 2021 𝐁.𝐓𝐞𝐜𝐡 Grad and Currently working as 𝐑𝐞𝐚𝐜𝐭 Developer in Wipro. `,
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Netflix Clone',
    description:
      'Netflix clone made with React and with firebase authentication, user login feature and multiple pages',
    stack: ['React', 'styled-component', 'redux-toolkit', 'Firebase'],
    screenshot: '../public/Images/netflixclone.png',
    sourceCode: 'https://github.com/vvksharrma/Netflix-clone',
    livePreview: 'https://netflixop.netlify.app/',
  },
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
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'UI/UX',
  'Git',
  'Github',
  'CI/CD',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vvk17sharma@gmail.com',
}

export { header, about, projects, skills, contact }
