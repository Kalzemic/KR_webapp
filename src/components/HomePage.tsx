import '../styles/HomePage.css'
import { useTheme } from './ThemContext'



export default function HomePage(){
    
    const {theme} = useTheme()
    return(
        <div className='home-page'>
            <video className='home-video' autoPlay loop muted playsInline
            onLoadedData={(e) => e.currentTarget.playbackRate = 0.99}
            key={theme}
            >
                <source  src={`/intro/${theme}.mp4`} type="video/mp4" 
                />
            </video>
        </div>
    )
}