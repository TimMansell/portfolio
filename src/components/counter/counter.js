import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: props.begin
        };

        this.randomCountTo = Math.floor(Math.random()*(props.end-props.begin+1)+props.begin)
    }

    componentDidMount() {
        this.tick = setInterval(this.incrementCounter, 1);
    }

    componentWillUnmount() {
        this.clearInterval();
    }

    incrementCounter = () => {
        if(this.state.counter <= this.randomCountTo){
            this.setState(prevState => ({
                counter: prevState.counter + 1
            })); 
        } else {
            this.clearInterval();
        }
    }

    clearInterval = () => {
        window.clearInterval(this.tick);
    }

    render() {
        return <>{this.state.counter}+</>;
    }
}

Counter.propTypes = {
    end: PropTypes.number.isRequired,
    begin: PropTypes.number.isRequired
};

export default Counter;