import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

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
      img: {
        name: 'test',
        formats: ['avif', 'webp'],
        fallback: 'jpg',
      },
    },
    {
      title: 'title',
      years: ['2020', '2021'],
      types: ['types'],
      description: 'description',
      tech: ['tech 1', 'tech 2', 'tech 3'],
      url: 'url',
      img: {
        name: 'test',
        formats: ['avif'],
        fallback: 'jpg',
      },
    },
  ],
  { virtual: true }
);

describe('Portfolio', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Portfolio />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Portfolio />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
