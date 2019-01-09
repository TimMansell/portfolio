import React from 'react';

// import {ShuffleCharacters} from '../shuffleCharacters/shuffleCharacters';

export class ShuffleContent extends React.Component {
    constructor(props) {
		super(props);

        this.shuffleContent = React.Children.toArray(this.props.children);

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

    // componentWillUpdate(){
    //     console.log('update');
    //     // this.shuffle();
    // }

    rotateContent = () => {
        this.shuffleContent.push(this.shuffleContent.shift());

        this.setState(prevState => ({
            content: this.shuffleContent[0]
        })); 
    }

    // content(){
    //     return <ShuffleCharacters>{this.state.content}</ShuffleCharacters>;
    // }

    render() {
        //return <ShuffleCharacters>{this.state.content}</ShuffleCharacters>;
        return <div>{this.state.content}</div>;
        // return <div>{this.content()}</div>;
        // return {this.state.renderChild ? <ShuffleCharacters>{this.state.content}</ShuffleCharacters> : null};
    }
}