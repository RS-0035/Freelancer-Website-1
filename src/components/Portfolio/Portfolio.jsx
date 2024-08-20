import React from 'react';

const Portfolio = () => {
    const projects = [
        { title: "Custom Dining Table", image: "table.jpg", description: "Handcrafted oak dining table." },
        { title: "Tailored Suit", image: "suit.jpg", description: "Custom tailored suit for a wedding." }
    ];

    return (
        <div>
            <h2>Portfolio</h2>
            <div>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={project.title} />
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
