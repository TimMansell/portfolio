import React from 'react';
import { Link } from 'react-scroll';

import { throttle } from 'lodash';
import classnames from 'classnames';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faAngleUp);

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
        let classes = classnames('goto-top', {'goto-top__show': this.state.isVisible});

        return <Link className={classes} to="root" smooth={true}>
            <FontAwesomeIcon icon={faAngleUp} size="3x" />
        </Link>;
    }
}

export default GoToTop;