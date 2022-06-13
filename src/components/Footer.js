import React from 'react';
import github from '../assets/GitHub-Mark.png'
import linkedIn from '../assets/linkedin.png'
import emailIcon from '../assets/email-icon.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className='content'>
                <span className='icon is-large fas fa-2x'>
                    <div className='contactIcon row col-centered'>
                        <a className='col-sm-1 ' href="https://github.com/anoorishad" target="blank"><img className="footerIcon" src={github} alt="Github" id="links" /></a>

                        <a className='col-sm-1' href="https://www.linkedin.com/in/anoorishad/" target="blank"><img className="footerIcon" src={linkedIn} alt="Linkedin" id="links" /></a>

                        <a className='col-sm-1' href="mailto: anoorishad@me.com" target="blank"><img className="footerIcon" src={emailIcon} alt="email" id="links" /></a>
                    </div>
                </span>
            </div>
        </footer>
    );
}