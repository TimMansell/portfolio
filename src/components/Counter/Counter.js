import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        const {begin, end} = props;

        this.state = {
            counter: begin
        };

        this.randomCountTo = Math.floor(Math.random()*(end-begin+1)+begin)
    }

    componentDidMount() {
        this.tick = setInterval(this.incrementCounter, 1);
    }

    componentWillUnmount() {
        this.clearInterval();
    }

    incrementCounter = () => {
        const { counter } = this.state;

        if(counter <= this.randomCountTo){
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
        const { counter } = this.state;

        return <>{counter}+</>;
    }
}

Counter.propTypes = {
    end: PropTypes.number.isRequired,
    begin: PropTypes.number.isRequired
};

export default Counter;