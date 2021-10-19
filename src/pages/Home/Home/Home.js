import React from 'react';
import Overview from '../../OverView/OverView';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Overview></Overview>
            <Team></Team>
        </div>
    );
};

export default Home;