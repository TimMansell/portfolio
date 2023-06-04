import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Stats from '../Stats';

jest.mock(
  '../json/stats.json',
  () => ({ loc: 3029, pullRequests: 73, commits: 339, coffees: 108 }),
  { virtual: true }
);

describe('Stats', () => {
  it('should render my component', () => {
    render(<Stats />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Stats />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should list correct amount of items', () => {
    const { getAllByTestId } = render(<Stats />);

    expect(getAllByTestId('stats-item')).toHaveLength(4);
  });
});
