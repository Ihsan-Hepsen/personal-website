
export default function SkillsSection() {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '20px',
        padding: '20px',
    }

    return (
        <section className='heroSection' id='skills'>
            <h3>My Skills</h3>
            <ul style={gridStyle}>
                <li>Java</li>
                <li>Spring Framework</li>
                <li>OOP</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>RESTful API</li>
                <li>Linux</li>
                <li>Shell Scripting</li>
                <li>Docker</li>
                <li>Microservices</li>
                <li>Oracle SQL</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Git</li>
                <li>Google Cloud Platform (GCP)</li>
                <li>Agile & Scrum</li>
                <li>Domain Driven Design (DDD)</li>
                <li>Rabbit MQ</li>
            </ul>
        </section>
    )
}
