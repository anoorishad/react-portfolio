import React from 'react'
import './About.css'
import ME from '../../assets/meWithBg.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>


            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icont'/>
                            <h5>Experience</h5>
                            <small>Coding Bootcamp Graduate</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icont'/>
                            <h5>Clients</h5>
                            <small>5+ Worldwide</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icont'/>
                            <h5>Projects</h5>
                            <small>5+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, dicta. Tenetur minus fuga suscipit commodi facilis assumenda alias laboriosam iste deserunt architecto temporibus, fugit eum qui, perspiciatis optio odit dolorem.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About