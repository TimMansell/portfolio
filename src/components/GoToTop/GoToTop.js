import React from 'react';
import { Link } from 'react-scroll';
import { throttle } from 'lodash';
import classnames from 'classnames';

import './GoToTop.scss';

import { IconAngleUp } from '../Icon';

export class GoToTop extends React.Component {
    constructor(props) {
		super(props);

		this.state = {
			isVisible: false
		};
	}

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = throttle((e) => {
        if(window.scrollY >= 800){
            this.setState(prevState => ({
                isVisible: true
            }));
        } else {
            this.setState(prevState => ({
                isVisible: false
            }));
        }
    }, 30)

    render() {
        let classes = classnames('goto-top', {'goto-top--show': this.state.isVisible});

        return <Link className={classes} to="root" smooth={true}>
            <IconAngleUp size="sm" />
        </Link>;
    }
}

export default GoToTop;