import React from 'react';

import InViewport from '../inViewport/inViewport';
import {ShuffleCharacters} from '../shuffleCharacters/shuffleCharacters';
import classnames from 'classnames';

export class Header extends React.Component {
    render() {
        let classes = classnames('heading ', {
            'heading--primary': this.props.primary,
            'heading--secondary': this.props.secondary,
            'heading--tertiary': this.props.tertiary
        });

        let text = '';
        
        if (this.props.text) {
            text = <p className="heading__description text--center">{this.props.text}</p>;
        }
        
        return <div className={classes}>
            <InViewport>
                <ShuffleCharacters>
                    <h2 className="heading__title">{this.props.title}</h2>
                </ShuffleCharacters>
            </InViewport>
            {text}
        </div>;
    }
}

export default Header;
