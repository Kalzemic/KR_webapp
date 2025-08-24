import '../styles/Portfolio.css'


const projects = ['project1.png', 'project2.png', 'project3.png', 'project4.png', 'project5.png', 'project6.png', 'project7.png', 'project8.png']

type VideoProps = {
    project: string
}

const Portfolio = () => {

    const playVideo: React.FC<VideoProps> = ({ project }) => {
        return (
            <div className='video-container'>
                <video width="640" height="360" controls>
                    <source src={project} type="video/mp4" />
                </video>
            </div>
        );
    }

    return (
        <div className="portfolio-page">
            <div className="projects-grid">
                {
                    projects.map((proj, i) => (
                        <div className="project-card"
                            key={i}
                            onClick={() => { playVideo({ project: proj }) }}
                        >
                            <img src={proj} alt="no image found" />
                        </div>
                    ))
                }
            </div>
        </div >
    );
}


export default Portfolio;