import Head from 'next/head'

import { Catamaran } from 'next/font/google'
import { useState, useEffect, SetStateAction } from 'react'

import { Avatar, Button, IconButton } from '@mui/material/'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Link from 'next/link'

const inter = Catamaran({ subsets: ['latin'] })

export default function Home() {

  const [darkTheme, setDarkTheme] = useState(undefined)

  const handleToggle = (e: { target: { checked: SetStateAction<any> } }) => {
    setDarkTheme(e.target.checked)
  }

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.querySelector('html')?.setAttribute('data-theme', 'dark')
        window.localStorage.setItem('theme', 'dark')
      } else {
        document.querySelector('html')?.removeAttribute('data-theme')
        window.localStorage.setItem('theme', 'light')
      }
    }
  }, [darkTheme])

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === 'dark')
  }, []);


  const favicon = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50%" font-size="90" text-anchor="middle">${encodeURIComponent(
    '💻'
  )}</text></svg>`

  return (
    <>
      <Head>
        <title>Ihsan Hepsen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Head>

      <div className='container'>

        <nav>
          <Avatar alt="Ihsan Hepsen profile pic" src="/profile-pic.jpg" sx={{ width: 140, height: 140 }} />
          <div className="toggle-container">
            <LightModeIcon />
            <label className="switch">
              <input type="checkbox" checked={darkTheme} onChange={(e) => handleToggle(e)} />
              <span className="slider"></span>
            </label>
            <DarkMode />
          </div>
        </nav>


        <section className='heroSection'>
          <h1>👋 Hi, Ihsan here!</h1>
          <h3>
            ...full-stack software engineer and web developer.
          </h3>
          <p>
            As a full-stack software engineer and web developer, I have extensive experience working with various technologies,
            including Java Spring, React.js, and TypeScript. I have built several web applications using these technologies,
            and I'm comfortable working on both the front-end and back-end parts of the stack.
          </p>
          <br />
          <p>
            In addition to deploying applications to cloud services like Google App Engine and Azure, I have also
            built microservices using containerization technologies like Docker, ensuring the
            scalability and maintainability of the services.
          </p>
          <br />
          <p>
            Collaborating on more than 9 real-world projects has given me the chance to work with teams of accomplished
            individuals and perfect my ability to work collectively. As a result of these ventures, I acquired
            knowledge and expertise on how software development operates; thus, I am eager to apply this invaluable
            experience working collaboratively with other seasoned professionals.
          </p>
        </section>

        <section className='heroSection'>
          <h3>My Skills 💪</h3>
          <p></p>
          <ul>
            <li>Java</li>
            <li>Spring Framework</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Python</li>
            <li>OOP</li>
            <li>RESTful API</li>
            <li>GraphQL</li>
            <li>UML</li>
            <li>Linux</li>
            <li>Shell Scripting</li>
            <li>Docker</li>
            <li>Microservices</li>
            <li>SQL</li>
            <li>Oracle SQL</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>GitLab</li>
            <li>Google Cloud Platform (GCP)</li>
            <li>Azure</li>
            <li>Agile & Scrum</li>
            <li>Domain Driven Design (DDD)</li>
            <li>Rabbit MQ</li>
          </ul>
        </section>

        <section className='heroSection'>
          <h3>My Interests 🔍</h3>
          <p>
            My interests lie in building seamless user interfaces and developing robust backend services
            as a full-stack developer. I thrive on exploring new technologies and frameworks to stay
            up-to-date with the latest industry trends, and I am constantly working to enhance my
            programming skills
          </p>
        </section>

        <section className='heroSection'>
          <h3>Let's Connect 🤝</h3>
          <Link href="https://www.linkedin.com/in/ihsan-h-287ba41b7" target="_blank" rel="noopener noreferrer">
            <IconButton className='primary-btn' aria-label="linkedin-profile" size="large">
              {/* <p>LinkedIn</p> */}
              <LinkedInIcon fontSize="medium" />
            </IconButton>
          </Link>
          <Link href="https://github.com/ihsan-hepsen" target="_blank" rel="noopener noreferrer">
            <IconButton className='primary-btn' aria-label="github-profile" size="large">
              <GitHubIcon fontSize="medium" />
            </IconButton>
          </Link>
        </section>

      </div>
    </>
  )
}
