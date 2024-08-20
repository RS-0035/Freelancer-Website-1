import React from 'react';

const ProjectDetail = () => {
    const project = {
        title: "Custom Dining Table",
        description: "Need a custom oak dining table for my home.",
        budget: "$1500",
        deadline: "2024-09-01",
        bids: ["Artisan 1", "Artisan 2", "Artisan 3"]
    };

    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Budget: {project.budget}</p>
            <p>Deadline: {project.deadline}</p>
            <h3>Bids</h3>
            <ul>
                {project.bids.map((bid, index) => (
                    <li key={index}>{bid}</li>
                ))}
            </ul>
            <button>Contact Artisan</button>
            <button>Accept Bid</button>
        </div>
    );
};

export default ProjectDetail;
