import Portfolio from '../components/Portfolio'
import AboutPage from '../components/AboutPage'
import ContactPage from '../components/ContactPage'
import HomePage from '../components/HomePage'
import '../styles/MainDisplay.css'
import Navbar from './Navbar'



export default function MainDisplay(){
    return(
        <div className="main-container">
             <Navbar />
            <section className="page-content" id="homepage">
              <HomePage/>
            </section>
            <section className="page-content" id="about">
              <AboutPage />
            </section>
            <section className="page-content" id="projects">
              <Portfolio />
            </section>
            <section className="page-content" id="contact">
              <ContactPage />
            </section>
            <section className="page-content" id="reviews">

            </section>
          </div>
    )
}