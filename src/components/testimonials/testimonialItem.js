import React from 'react';
import PropTypes from 'prop-types';

export const TestimonialItem = ({data}) => {
    return <div className="testimonials__quote">
        <p className="testimonials__text">{data.description}</p>
        <p className="testimonials__name">{data.author}</p>
    </div>;
}

TestimonialItem.propTypes = {
	data: PropTypes.object.isRequired
};

export default TestimonialItem;