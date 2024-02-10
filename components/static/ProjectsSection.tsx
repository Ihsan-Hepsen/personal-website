import ProjectCard from "../ProjectCard"

const projects = {
    'chromeExtension': {
        title: 'AI-Powered Chrome Extension',
        tools: ['JavaScript', 'Open AI', 'ChatGPT 3.5', 'HTML', 'CSS'],
        desc: 'AI Article Assistant is a Chrome extension designed to enhance your browsing and research experience. It enables you to summarize, bulletize, and elaborate any selected text using ChatGPT 3.5 Turbo.',
        link: 'https://github.com/Ihsan-Hepsen/AI-Article-Assistant'
    },
    'urlShortener': {
        title: 'URL Shortener',
        tools: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'HTML', 'CSS', 'HTMX'],
        desc: 'Simple URL shortener website for long links you may have.',
        link: 'https://github.com/Ihsan-Hepsen/URL-Shortener/'
    },
    'bmacFrontend': {
        title: 'Bake Me a Cake (BMaC) React Client',
        tools: ['React JS', 'TypeScript', 'Material UI'],
        desc: 'Bake me a cake React client for warehouse domain.',
        link: 'https://github.com/Ihsan-Hepsen/Bake-Me-a-Cake-Frontend'
    },
    'bmacBackend': {
        title: 'Bake Me a Cake (BMaC) Backend',
        tools: ['Java', 'Spring Framework', 'JUnit', 'Mockito', 'Docker', 'MySQL'],
        desc: 'Bake me a cake microservice backend service for warehouse, factory, and store domains.',
        link: 'https://github.com/Ihsan-Hepsen/Bake-Me-a-Cake-Backend'
    },
    'transferLearning': {
        title: 'Transfer Learning',
        tools: ['VGG 16 Image set', 'Python', 'Jupyter Notebook'],
        desc: 'Using transfer learning to build a convolutional neural network to detect celebrity images.',
        link: 'https://github.com/Ihsan-Hepsen/Transfer-Learning'
    },
    'aviato': {
        title: 'Aviato, CRUD App',
        tools: ['Java', 'Spring Framework', 'Tyhmeleaf', 'Bootsrap', 'GraphQL', 'PostgreSQL'],
        desc: 'Flight browsing system with added user management and spring security. GraphQL added as an alternative to REST.',
        link: 'https://github.com/Ihsan-Hepsen/Aviato-Improved'
    },

}

export default function ProjectSection() {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px',
    }

    return (
        <section className='heroSection' id='projects'>
            <h3>Projects</h3>
            <div style={gridStyle}>
                <ProjectCard title={projects["chromeExtension"].title} tools={projects["chromeExtension"].tools} desc={projects["chromeExtension"].desc} repoLink={projects["chromeExtension"].link} />
                <ProjectCard title={projects["urlShortener"].title} tools={projects["urlShortener"].tools} desc={projects["urlShortener"].desc} repoLink={projects["urlShortener"].link} />
                <ProjectCard title={projects["bmacFrontend"].title} tools={projects["bmacFrontend"].tools} desc={projects["bmacFrontend"].desc} repoLink={projects["bmacFrontend"].link} />
                <ProjectCard title={projects["bmacBackend"].title} tools={projects["bmacBackend"].tools} desc={projects["bmacBackend"].desc} repoLink={projects["bmacBackend"].link} />
                <ProjectCard title={projects["transferLearning"].title} tools={projects["transferLearning"].tools} desc={projects["transferLearning"].desc} repoLink={projects["transferLearning"].link} />
                <ProjectCard title={projects["aviato"].title} tools={projects["aviato"].tools} desc={projects["aviato"].desc} repoLink={projects["aviato"].link} />
            </div>
        </section>
    )
}