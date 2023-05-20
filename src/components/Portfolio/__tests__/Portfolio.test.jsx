import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Portfolio from '../Portfolio';

vi.mock('../json/portfolio.json', () => ({
  default: [
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
}));

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
