import React from 'react';
import aboutImg from '../../images/about.jpg';

const AboutUs = () => {
    return (
        <div className=" container my-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
            <div className=" lg:px-20">
                <h3 className="text-xl text-green-400">We'd Love To</h3>
                <h1 className="text-7xl text-green-700">SEE YOU SMILE</h1>
                <p className="pt-8">Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline.
                    Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
            </div>
            <div className="">
                <img className="rounded-lg" src={aboutImg} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;