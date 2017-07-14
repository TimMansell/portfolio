import React from 'react';

import {ShuffleCharacters} from '../shuffleCharacters/shuffleCharacters';

export class ShuffleContent extends React.Component {
    constructor(props) {
		super(props);

        this.shuffleContent = React.Children.toArray(this.props.children);

        console.log('this.shuffleContent', this.shuffleContent);

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
        return <ShuffleCharacters>{this.state.content}</ShuffleCharacters>;
    }
}