import React from 'react';

const Profile = () => {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        bio: "Experienced carpenter with over 10 years of experience.",
        services: ["Custom Furniture", "Woodworking", "Repairs"],
        projects: ["Custom Bookshelf", "Dining Table", "Cabinet Repairs"]
    };

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.bio}</p>
            <h3>Services</h3>
            <ul>
                {user.services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
            <h3>Projects</h3>
            <ul>
                {user.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
