import React from 'react';
import ReactDOM from 'react-dom';
import inViewport from 'in-viewport';

export class InViewport extends React.Component {
    constructor(props) {
		super(props);

        this.state = {
            isInViewport: false
        };
    }
    
    componentDidMount() {
        const element = ReactDOM.findDOMNode(this);

        inViewport(element, this.visible); 
    }

	visible = () => {
        this.setState(prevState => ({
            isInViewport: true
        }));
    }
    
    render() {
        return <>
            {!this.state.isInViewport && <span>&nbsp;</span> }
            {this.state.isInViewport && <span>{this.props.children}</span>}
        </>;
    }
}

export default InViewport;