
import './App.css'

import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

function App() {


  return (
    <div className="main-container">
      <Navbar />
      <section className="page-content" id="homepage">
        {/* <div className="dummy" /> */}
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

export default App
