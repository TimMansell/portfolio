import React from 'react';

import './Parallax.scss';

export const Parallax = ({image}) => {
    return <div class="parallax">
        <img className="parallax__image" src={image} />
    </div>;
}

export default Parallax;