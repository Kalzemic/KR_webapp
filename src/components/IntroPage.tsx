import { useNavigate } from 'react-router-dom'
import '../styles/IntroPage.css'
import { useTheme } from './ThemContext'
import { Button } from "./ui/button"




export default function IntroPage(){

    



    const navigate = useNavigate()
    const {setTheme} = useTheme()



    return(
        <div className='intro-page'>
            {/* <div className='intro-header'>
                
                <div className='intro-title'>
                <h1 >KR MOMENTS</h1>
                </div>
            </div> */}
            <img className='intro-logo' src='/logo/kr_logo.jpeg'/>
            <Button variant='default' className='business-button' 
                onClick={()=>{setTheme('business'); navigate('/display')}}>
                צילומי עסקים
            </Button>
            <div className='intro-video-container'>
            <video id='business-video' className='intro-video' autoPlay loop muted playsInline
            onLoadedData={(e) => e.currentTarget.playbackRate = 0.99}
            >
                <source  src="/intro/business.mp4" type="video/mp4" 
                />
            </video>
            </div>
            <Button variant='default'  className='events-button' 
                onClick={()=>{setTheme('events'); navigate('/display')}}>
                צילומי אירועים
            </Button>

            <div className='intro-video-container'>
            <video id='events-video' className='intro-video' autoPlay loop muted playsInline
            >
                <source src="/intro/events.mp4" type="video/mp4"/>
            </video>
            </div>

        </div>
    )
}