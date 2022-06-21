import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/DreamTheme.png'
import IMG2 from '../../assets/DreamTheme.png'
import IMG3 from '../../assets/DreamTheme.png'
import IMG4 from '../../assets/DreamTheme.png'
import IMG5 from '../../assets/DreamTheme.png'
import IMG6 from '../../assets/DreamTheme.png'



const data = [
    {
        id: 1,
        image: IMG1,
        title: 'DreamTheme',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'DreamTheme',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'DreamTheme',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 4,
        image: IMG4,
        title: 'DreamTheme',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'DreamTheme',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 6,
        image: IMG6,
        title: 'DreamTheme',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image"></div>
                                <img src={image} alt={title} />
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>GitHub</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio