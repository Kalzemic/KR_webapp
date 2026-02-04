import { useNavigate } from 'react-router-dom'
import '../styles/IntroPage.css'
import { useTheme } from './ThemContext'
import { Button } from "./ui/button"



export default function IntroPage(){

    




    const navigate = useNavigate()
    const {setTheme} = useTheme()
    return(
        <div className='intro-page'>

            <Button className='business-button' 
                onClick={()=>{setTheme('business'); navigate('/display')}}>
                לתוכן עסקים
            </Button>
            <video id='business-video' className='intro-video' autoPlay loop muted playsInline
            onLoadedData={(e) => e.currentTarget.playbackRate = 0.99}
            >
                <source  src="/intro/business.mp4" type="video/mp4" 
                />
            </video>
            <Button className='events-button' 
                onClick={()=>{setTheme('events'); navigate('/display')}}>
                לתוכן אירועים
            </Button>

            <video id='events-video' className='intro-video' autoPlay loop muted playsInline
            onClick={()=>{setTheme('events'); navigate('/display')}}
            >
                <source src="/intro/events.mp4" type="video/mp4"/>
            </video>

        </div>
    )
}