import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: this.props.begin
        };

        this.randomCountTo = Math.floor(Math.random()*(this.props.end-this.props.begin+1)+this.props.begin)
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
        return <span>{this.state.counter}+</span>;
    }
}

export default Counter;