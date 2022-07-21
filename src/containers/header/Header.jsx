import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/astronaut.png';
const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className="gpt3__header-content">
                <h1 className='gradient__text'>Galaxy Space-X</h1>
                <p>A galaxy is a gravitationally bound system of stars, stellar remnants
                    interstellar gas, dust, and dark matter. The word galaxy is derived from the Greek galaxias
                    literally "milky", a reference to the Milky Way.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder='Your Email Address' />
                    <button type='button'>Tap in SpaceX</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,1140000 folks visited it every day</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>


        </div>
    )
}

export default Header
