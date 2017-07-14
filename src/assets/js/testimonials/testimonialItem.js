import React from 'react';


// import format from 'date-fns/format';

export class TestimonialItem extends React.Component {
    render() {
        return <div className="testimonials__quote">
            <p className="testimonials__text">{this.props.data.description}</p>
            <p className="testimonials__name">{this.props.data.author}</p>
        </div>;
    }
}