import ProjectCard from "../ProjectCard"

const projects = {
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
    return (
        <section className='heroSection' id='projects'>
            <h3>Projects</h3>
            <ProjectCard title={projects["bmacFrontend"].title} tools={projects["bmacFrontend"].tools} desc={projects["bmacFrontend"].desc} repoLink={projects["bmacFrontend"].link} />
            <ProjectCard title={projects["bmacBackend"].title} tools={projects["bmacBackend"].tools} desc={projects["bmacBackend"].desc} repoLink={projects["bmacBackend"].link} />
            <ProjectCard title={projects["transferLearning"].title} tools={projects["transferLearning"].tools} desc={projects["transferLearning"].desc} repoLink={projects["transferLearning"].link} />
            <ProjectCard title={projects["aviato"].title} tools={projects["aviato"].tools} desc={projects["aviato"].desc} repoLink={projects["aviato"].link} />
        </section>
    )
}