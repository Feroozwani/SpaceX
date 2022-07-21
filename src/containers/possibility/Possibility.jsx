import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
    <div className="gpt3__possibility section__padding" id="possibility">
        <div className="gpt3__possibility-image">
            <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3__possibility-content">
            <h4>SpaceX was a winner of a NASA</h4>
            <h1 className="gradient__text">
                WHY WE HAVEN'T BEEN BACK TO THE MOON</h1>
            <p>The last time a person visited the moon was in December 1972, during NASA's Apollo 17 mission. Over the decades, NASA has planned to send people back to the moon but has yet to succeed. So what happened after Apollo?</p>
            <h4> The space program for the Los Angeles Times</h4>
        </div>
    </div>
);

export default Possibility;