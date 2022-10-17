import React, { useRef, useState } from 'react'
import './contacts.css'
import emailjs from '@emailjs/browser'

const Contacts = () => {

    const form = useRef();
    const [name, setname] = useState("");
    const [mail, setmail] = useState("");
    const [message, setmessage] = useState("");

    const handlenamechange = e => {
        setname(e.target.value);
    }
    const handlemailchange = e => {
        setmail(e.target.value);
    }
    const handlemessagechange = e => {
        setmessage(e.target.value);
    }

    const sendEmail = (e) => {
        emailjs.sendForm('service_Sachin', 'template_9wou3j9', form.current, '3DjZJ0hs1frZ_smaD')
            .then((result) => {
                console.log(result.text);
                alert("thanks for contacting me....");
            }, (error) => {
                console.log(error.text);
            });
        setname("");
        setmail("");
        setmessage("");
        e.preventDefault();
    };
    return (
        <div className='contact-form' id='Contactus'>
            <div className="con-left min-con-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                </div>
            </div>
            <div className="con-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' value={name} required onChange={handlenamechange} placeholder='Name' />
                    <input type="email" name='user_email' className='user' value={mail} required onChange={handlemailchange} placeholder='E-mail' />
                    <textarea name="message" className='user' value={message} required onChange={handlemessagechange} placeholder='message'></textarea>
                    <input type="submit" value="Send" className="button" />
                </form>
            </div>
        </div>
    )
}

export default Contacts




