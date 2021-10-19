import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png';

const NotFound = () => {
    return (
        <div className="mx-auto">
            <img className="w-1/5" src={notfound} alt="" />
            <Link to="/">
                <button className="text-2xl extrabold">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;