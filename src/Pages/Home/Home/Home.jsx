import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import SkillPart from '../SkillsPart/SkillPart';
import MyProjects from '../../MyProjects/MyProjects';
import Quotes from '../Quotes/Quotes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <SkillPart></SkillPart>
            <MyProjects></MyProjects>
            <Quotes></Quotes>
        </div>
    );
};

export default Home;