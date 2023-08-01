import {
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon,
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    DarkMode
  } from '@mui/icons-material'
import { IconButton, Link } from '@mui/material'
  
export default function SocialsSection() {
    return (
        <section className='heroSection' id='socials'>
            <h3>Let's Connect</h3>
            <Link href="https://www.linkedin.com/in/ihsan-h-287ba41b7" target="_blank" rel="noopener noreferrer">
                <IconButton className='primary-btn' aria-label="linkedin-profile" size="large">
                    <LinkedInIcon fontSize="large" />
                </IconButton>
            </Link>
            <Link href="https://github.com/ihsan-hepsen" target="_blank" rel="noopener noreferrer">
                <IconButton className='primary-btn' aria-label="github-profile" size="large">
                    <GitHubIcon fontSize="large" />
                </IconButton>
            </Link>
        </section>
    )
}
