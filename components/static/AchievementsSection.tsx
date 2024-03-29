export default function AchievementsSection() {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        padding: '10px',
    }

    return (
        <section className='heroSection' id='achievements'>
            <div style={gridStyle}>
                <div>
                    <h2>Full-Stack Web Development</h2>
                    <p>
                        I have hands-on experience in building web applications using
                        Java and the Spring framework. For the server-side, I utilize Java,
                        Spring Boot, Spring MVC, and Spring Security. Additionally,
                        I am proficient in Docker for containerization and utilize Keycloak
                        for authentication and authorization. My build and dependency management
                        skills extend to Gradle and Maven. On the frontend, I specialize in creating
                        dynamic applications with React. With this comprehensive tech stack,
                        I design and build visually appealing and intuitive web applications.
                    </p>
                </div>
                <div>
                    <h2>AI & ML</h2>
                    <p>
                        I have exposure to creating a tutorial on transfer learning for celebrity
                        image detection, building a reinforcement learning model, and implementing
                        recommender systems. With exposure to popular AI & ML tools like TensorFlow
                        and scikit-learn, I'm expanding my knowledge in the vast realm of AI.
                    </p>
                </div>
                <div>
                    <h2>Cloud</h2>
                    <p>
                        I have deployed numerous applications to Google Cloud Platform, utilizing
                        VMs and Google App Engine. I also have experience working with SQL databases
                        on the cloud. Additionally, I have deployed applications to an AWS EC2 instance.
                        My exposure to cloud deployments allows me to leverage the power of cloud-based
                        solutions for scalable and efficient applications.
                    </p>
                </div>
                <div>
                    <h2>Shell Scripting</h2>
                    <p>
                        I have developed various scripts, including one for regular file backups on an
                        Apache web server using CRON jobs, ensuring data reliability. Additionally,
                        I created shell scripts for automating the creation of custom VMs on the Google
                        Cloud Platform, streamlining cloud infrastructure management. My exposure to
                        shell scripting enables me to efficiently automate tasks, optimize workflows,
                        and enhance system operations.
                    </p>
                </div>
                <div>
                    <h2>Embedded</h2>
                    <p>
                        In embedded development, I've used Arduino Uno and C programming language to create projects
                        like a ping pong game with physical buttons and a&nbsp;
                        <a href="https://github.com/ihsan-hepsen/safespot" target="_blank">
                            cyclist safety system with ultrasonic sensors
                        </a>.
                    </p>
                </div>

            </div>
        </section>
    )
}
