import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
            <Feature title="What is Space-X" text="SpaceX is developing a satellite internet constellation named Starlink to provide commercial internet service. In January 2020, the Starlink constellation became the largest satellite constellation ever launched, and as of May 2022 it comprises over 2,400 small satellites in orbit." />
        </div>
        <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">Space Exploration Technologies Corp. <br /> is an American spacecraft manufacturer, space launch provider, and a satellite communications</h1>
            <p>Explore to know more Autonomous spaceport drone ships</p>
        </div>
        <div className="gpt3__whatgpt3-container">
            <Feature title="Launch vehicles" text="SpaceX has developed three launch vehicles. The small-lift Falcon 1 was the first launch vehicle developed and was retired in 2009. The medium-lift Falcon 9 and the heavy-lift Falcon Heavy are both operational" />
            <Feature title="Rocket engines" text="Since the founding of SpaceX in 2002, the company has developed several rocket engines Merlin, Kestrel, and Raptor for use in launch vehicles,Draco for the reaction control system of the Dragon series of spacecraft and SuperDraco for abort capability in Crew Dragon." />
            <Feature title="Dragon spacecraft" text="SpaceX has developed the Dragon spacecraft to transport cargo and crew to the International Space Station. The first version of Dragon, used only for cargo, was first launched in 2010" />
        </div>
    </div>
);

export default WhatGPT3;