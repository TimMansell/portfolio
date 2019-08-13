import React from 'react';
import PropTypes from 'prop-types';

export class ShuffleContent extends React.Component {
    constructor(props) {
		super(props);

        this.shuffleContent = React.Children.toArray(props.children);

        this.state = {
            content: this.shuffleContent[0]
        };
	}

    componentDidMount() {
        this.tick = setInterval(this.rotateContent, 4000);
    }

    componentWillUnmount() {
        window.clearInterval(this.tick);
    }

    rotateContent = () => {
        this.shuffleContent.push(this.shuffleContent.shift());

        this.setState(prevState => ({
            content: this.shuffleContent[0]
        })); 
    }

    render() {
        const { content } = this.state;

        return <div>{content}</div>;
    }
}

ShuffleContent.propTypes = {
	children: PropTypes.node.isRequired
};

export default ShuffleContent;