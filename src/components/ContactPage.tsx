import { useState } from 'react';
import '../styles/ContactPage.css'




const ContactPage = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    return (
        <form className='contact-form' >

            <div className='form-segment'>
                <div className='form-input'>
                    <label htmlFor='shem' > שם מלא:</label>
                    <input id='shem' type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
            </div>
            <div className='form-segment'>
                <div className='form-input'>
                    <label htmlFor='phone' >טלפון:</label>
                    <input id='phone' type='text' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                </div>
                <div className='form-input'>
                    <label htmlFor='email' > דוא"ל:</label>
                    <input id='email' type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
            </div>
            <button type='submit' >שלח </button>
        </form>
    );
}


export default ContactPage;