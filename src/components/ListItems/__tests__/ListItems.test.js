import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ListItems from '../ListItems';

const defaultProps = {
  items: [
    {
      title: 'title 1',
      list: ['list name 1'],
      icon: {
        name: 'css3-alt',
        family: 'fab',
      },
    },
    {
      title: 'title 2',
      list: ['list name 2'],
      icon: {
        name: 'css3-alt',
        family: 'fab',
      },
    },
  ],
};

describe('ListItems', () => {
  it('should render my component', () => {
    render(<ListItems {...defaultProps} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<ListItems {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should list correct amount of items', () => {
    const { getAllByTestId } = render(<ListItems {...defaultProps} />);

    expect(getAllByTestId('list-item')).toHaveLength(2);
  });
});
