import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Portfolio from '../Portfolio';

jest.mock(
  '../json/portfolio.json',
  () => [
    {
      title: 'title',
      years: ['2020'],
      types: ['types'],
      description: 'description',
      tech: ['tech 1', 'tech 2'],
      url: 'url',
      source: 'source',
      img: 'test',
    },
    {
      title: 'title',
      years: ['2020', '2021'],
      types: ['types'],
      description: 'description',
      tech: ['tech 1', 'tech 2', 'tech 3'],
      url: 'url',
      img: 'test',
    },
  ],
  { virtual: true }
);

describe('Portfolio', () => {
  it('should render my component', () => {
    render(<Portfolio />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Portfolio />);

    expect(asFragment()).toMatchSnapshot();
  });
});
