import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import CurrentStackItems from '../CurrentStackItems';

jest.mock(
  '../json/stack.json',
  () => [
    {
      name: 'react',
      url: 'url',
      width: '65',
      height: '50',
    },
    {
      name: 'nodejs',
      url: 'url',
      width: '90',
      height: '50',
    },
  ],
  { virtual: true }
);

describe('CurrentStackItems', () => {
  it('should render my component', () => {
    render(<CurrentStackItems />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<CurrentStackItems />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correct amount of items', () => {
    const { queryAllByTestId } = render(<CurrentStackItems />);
    const list = queryAllByTestId('stack-item');

    expect(list).toHaveLength(2);
  });
});
