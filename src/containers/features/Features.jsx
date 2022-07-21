import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';
const featuresData = [
    {
        title: 'Product Differentiation ',
        text: 'First-stage engine, second-stage engine, and rocket boosters are the components of a rocket that increases its production cost. SpaceX has developed a transformative technology of manufacturing reusable rocket components that significantly reduces cost'
    },
    {
        title: 'Manufacturing Unit & Team Differentiation ',
        text: 'The different workstations of the company connect with the help of NX (software developed in-house) with each other, which facilitates seamless communication amongst the team members working in different buildings'
    },
    {
        title: 'Cost leadership ',
        text: 'The future projects of SpaceX are working on to produce low-cost rockets that will penetrate the space manufacturing market to its core. It has triggered the interest of large investors in the next-generation launch systems.'
    },
    {
        title: 'Testability',
        text: 'If you can reuse it, you can test it more effectively. This is something that SpaceX already does with subsystems'
    },
]
const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>SpaceX was formed by entrepreneur Elon Musk in the hopes of revolutionizing the aerospace industry and making affordable spaceflight a reality</h1>
                <p>Space Exploration Technologies Corporation</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features
