import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ListItem from '../ListItem';

const defaultProps = {
  item: {
    title: 'title',
    list: ['list name 1', 'list name 2'],
    icon: {
      name: 'css3-alt',
      family: 'fab',
    },
  },
};

describe('ListItem', () => {
  it('should render my component', () => {
    render(<ListItem {...defaultProps} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<ListItem {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
