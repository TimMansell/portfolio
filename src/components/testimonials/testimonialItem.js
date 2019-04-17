import React from 'react';

export const TestimonialItem = ({data}) => {
    return <div className="testimonials__quote">
        <p className="testimonials__text">{data.description}</p>
        <p className="testimonials__name">{data.author}</p>
    </div>;
}

export default TestimonialItem;