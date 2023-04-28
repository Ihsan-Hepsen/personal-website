import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";


const projects = {
    'bmacFrontend': {
        title: 'Bake Me a Cake (BMaC) React Client',
        tools: ['React JS', 'TypeScript', 'Material UI'],
        desc: 'Bake me a cake React client for warehouse domain.',
        link: 'https://github.com/Ihsan-Hepsen/Bake-Me-a-Cake-Frontend'
    },
    'bmacBackend': {
        title: 'Bake Me a Cake (BMaC) Backend',
        tools: ['Java', 'Spring Framework', 'JUnit', 'Mockito'],
        desc: 'Bake me a cake microservice backend service for warehouse, factory, and store domains.',
        link: 'https://github.com/Ihsan-Hepsen/Bake-Me-a-Cake-Backend'
    },
    'transferLearning': {
        title: 'Transfer Learning',
        tools: ['VGG 16 Image set', ''],
        desc: 'Using transfer learning to build a convolutional neural network to detect celebrity images.',
        link: 'https://github.com/Ihsan-Hepsen/Transfer-Learning'
    },
    'aviato': {
        title: '',
        tools: [],
        desc: '',
        link: ''
    },

}

export default function ProjectSection() {
    return (
        <section className='heroSection' id='projects'>
            <h3>Projects 📚</h3>
            <ProjectCard className='project-cards' title={projects["bmacFrontend"].title} tools={projects["bmacFrontend"].tools} desc={projects["bmacFrontend"].desc} repoLink={projects["bmacFrontend"].link} />
            <ProjectCard className='project-cards' title={projects["bmacBackend"].title} tools={projects["bmacBackend"].tools} desc={projects["bmacBackend"].desc} repoLink={projects["bmacBackend"].link} />
            <ProjectCard className='project-cards' title={projects["transferLearning"].title} tools={projects["transferLearning"].tools} desc={projects["transferLearning"].desc} repoLink={projects["transferLearning"].link} />
            <ProjectCard className='project-cards' title="Bake Me a Cake" tools={['Java', 'Java Script']} desc='best projecct ever' repoLink="#" />
        </section>
    )
}