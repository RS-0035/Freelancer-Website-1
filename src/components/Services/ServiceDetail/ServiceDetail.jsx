import React from 'react';

const ServiceDetail = () => {
    const service = {
        title: "Custom Furniture Design",
        description: "High-quality custom furniture design tailored to your needs.",
        price: "$1500",
        artisan: "John Doe",
        reviews: [
            { user: "Client A", text: "Amazing work!", rating: 5 },
            { user: "Client B", text: "Very satisfied.", rating: 4 }
        ]
    };

    return (
        <div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <p>Price: {service.price}</p>
            <p>Artisan: {service.artisan}</p>
            <h3>Reviews</h3>
            <div>
                {service.reviews.map((review, index) => (
                    <p key={index}><strong>{review.user}:</strong> {review.text} ({review.rating} stars)</p>
                ))}
            </div>
            <button>Hire Artisan</button>
            <button>Contact Artisan</button>
        </div>
    );
};

export default ServiceDetail;
