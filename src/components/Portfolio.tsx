import '../styles/Portfolio.css'


const projects = ['project1.png', 'project2.png', 'project3.png', 'project4.png', 'project5.png', 'project6.png']


const Portfolio = () => {
    return (
        <div className="portfolio-page">
            <div className="projects-grid">
                {
                    projects.map((proj, i) => (
                        <div className="project-card"
                            key={i}
                        >
                            <img src={proj} alt="no image found" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}


export default Portfolio;