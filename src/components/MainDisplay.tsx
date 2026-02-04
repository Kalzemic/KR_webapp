import Portfolio from '../components/Portfolio'
import AboutPage from '../components/AboutPage'
import ContactPage from '../components/ContactPage'
import HomePage from '../components/HomePage'
import '../styles/MainDisplay.css'
import Navbar from './Navbar'
import { useEffect, useRef } from 'react'
import { useTheme } from './ThemContext'



export default function MainDisplay(){
    const {theme} = useTheme();
    const prevThemeRef = useRef<String | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      localStorage.setItem("theme", theme);
    }, [theme]);

      useEffect(()=>{
  
              if (containerRef.current) {
                containerRef.current.classList.remove(`${prevThemeRef.current}`)
                
                containerRef.current.classList.add(`${theme}`);
                
                
                const elements = containerRef.current.querySelectorAll('*');
                elements.forEach(el => {
                  el.classList.remove(`${prevThemeRef.current}`)
                  el.classList.add(`${theme}`)
              });
                prevThemeRef.current = theme
              }
          }
      ,[theme])
    return(
        <div className="main-container" ref={containerRef}>
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