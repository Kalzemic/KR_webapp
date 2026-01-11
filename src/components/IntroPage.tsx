import { useNavigate } from 'react-router-dom'
import '../styles/IntroPage.css'
import { useTheme } from './ThemContext'




export default function IntroPage(){





    const navigate = useNavigate()
    const {setTheme} = useTheme()
    return(
        <div className='intro-page'>

            <video id='business-video' className='intro-video' autoPlay loop muted playsInline
            onLoadedData={(e) => e.currentTarget.playbackRate = 0.7}
            >
                <source  src="/intro/business.mp4" type="video/mp4" 
                />
            </video>
            <button className='business-button' 
            onClick={()=>{setTheme('business'); navigate('/display')}}>
                לתוכן עסקים
            </button>

            <video id='events-video' className='intro-video' autoPlay loop muted playsInline
            onClick={()=>{setTheme('events'); navigate('/display')}}
            >
                <source src="/intro/events.mp4" type="video/mp4"/>
            </video>
            <button className='events-button' 
            onClick={()=>{setTheme('events'); navigate('/display')}}>
            לתוכן אירועים
            </button>
        </div>
    )
}