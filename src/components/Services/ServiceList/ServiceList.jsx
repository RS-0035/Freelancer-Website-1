import React from "react";

const ServiceList = () => {
  const services = [
    { title: "Custom Furniture Design", price: "$1500", rating: 4.8 },
    { title: "Tailoring Services", price: "$100", rating: 4.5 },
    // Add more services here
  ];

  return (
    <div>
      <h2>Available Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <h3>{service.title}</h3>
            <p>Price: {service.price}</p>
            <p>Rating: {service.rating}</p>
            <button>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
