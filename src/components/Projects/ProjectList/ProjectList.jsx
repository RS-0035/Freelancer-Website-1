import React from "react";

const ProjectList = () => {
  const projects = [
    { title: "Custom Bookshelf", budget: "$500", deadline: "2024-09-01" },
    { title: "Kitchen Renovation", budget: "$3000", deadline: "2024-10-15" },
    // Add more projects here
  ];

  return (
    <div>
      <h2>Available Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>Budget: {project.budget}</p>
            <p>Deadline: {project.deadline}</p>
            <button>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
