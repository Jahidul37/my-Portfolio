import React from 'react';
import HeadersNav from '../Shared/HeadersNav';
import { Outlet } from 'react-router-dom';
import Footers from '../Shared/Footers';
import BgTSparticles from '../Components/BgTSparticles';

const Main = () => {
    return (
        <div>
            <BgTSparticles></BgTSparticles>
            <HeadersNav></HeadersNav>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Main;