import React from 'react';
import PropTypes from 'prop-types';

import InViewport from '../inViewport/inViewport';
import {ShuffleCharacters} from '../shuffleCharacters/shuffleCharacters';
import classnames from 'classnames';

export const Header = ({primary, secondary, tertiary, text, title}) => {
    let classes = classnames('heading ', {
        'heading--primary': primary,
        'heading--secondary': secondary,
        'heading--tertiary': tertiary
    });
 
    if (text) {
        text = <p className="heading__description text--center" data-test-heading-description>{text}</p>;
    }
    
    return <div className={classes}>
        <InViewport>
            <ShuffleCharacters>
                <h2 className="heading__title" data-test-heading-title>{title}</h2>
            </ShuffleCharacters>
        </InViewport>
        {text}
    </div>;
}

Header.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool, 
    text: PropTypes.string, 
    title: PropTypes.string.isRequired
};

export default Header;