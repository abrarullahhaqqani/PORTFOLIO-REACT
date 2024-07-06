import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {themeContext} from '../../Context'
import './Contact.css'
const Contact = () => {
    const form = useRef();
  const [done,setdone]=useState(false);
   const [name,setname]=useState("");
   const [email,setemail]=useState("");
   const [msg,setmsg]=useState("");
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fa4g0hj', 'template_biu590e', form.current, '24DUe9ZEXD4mO_Yl0')
            .then((result) => {
                console.log(result.text);
                setdone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
  const theme= useContext(themeContext);
  const dark=theme.state.Darkmode  
    return (
        <div className="contact-form" id='Contact'>
            <div className="w-left">
                <div className="text">
                    <span style={dark?{color:"white"}:{color:""}}>Get in Touch</span>
                    <span>Contact Me</span>
                    <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" className='user' placeholder='Name' value={done?"":name} onChange={(e)=>{
                        setname(e.target.value)
                    }}/>
                    <input type="email" name="from_email" className='user' placeholder='Email'  value={done?"":email} onChange={(e)=>{
                        setemail(e.target.value)
                    }}/>
                    <textarea name="message" className='user' placeholder='Message'  value={done?"":msg} onChange={(e)=>{
                        setmsg(e.target.value)
                    }}></textarea>
                    <input type="submit" value="Send" className="button s-button" />
                    <span>{done && "Thanks for contacting me.Your mesage is received and i will try to reply ASAP!!"}</span>
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
