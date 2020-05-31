import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import './ListItems.scss';

export const ListItems = ({ items }) => {
  return (
    <div className="list-items">
      {items.map((item, i) => (
        <ListItem item={item} key={i} />
      ))}
    </div>
  );
};

ListItems.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListItems;
