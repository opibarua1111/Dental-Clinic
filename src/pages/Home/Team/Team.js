import React from 'react';

const Team = () => {
    return (
        <div>
            <h2 className="text-gray-700 text-4xl mt-10">Our Team</h2>
            <div className="mb-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
                <div>
                    <img className="rounded-full" src="https://i.ibb.co/sHgvPKv/team-1.jpg" alt="" />
                </div>
                <div>
                    <img className="rounded-full" src="https://i.ibb.co/gZh8HN3/team-2.jpg" alt="" />
                </div>
                <div>
                    <img className="rounded-full" src="https://i.ibb.co/9NGTSmJ/team-3.jpg" alt="" />
                </div>
                <div>
                    <img className="rounded-full" src="https://i.ibb.co/nMLV3KV/team-4.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Team;