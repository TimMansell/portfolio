import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PortfolioItem from '../PortfolioItem';

const defaultProps = {
  title: 'Title',
  year: '2020',
  description: 'Description',
  tech: ['Tech', 'Tech 2'],
  url: 'url.com',
  src: {
    name: 'solitaire-project',
    types: ['avif', 'webp'],
    fallback: 'jpg',
  },
  source: 'source',
};

describe('PortfolioItem', () => {
  it('should render my component', () => {
    const props = {
      ...defaultProps,
    };
    // eslint-disable-next-line
    const wrapper = shallow(<PortfolioItem {...props} />);
  });

  it('should match snapshot', () => {
    const props = {
      ...defaultProps,
    };
    const snapshot = renderer.create(<PortfolioItem {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should render source button', () => {
    const props = {
      ...defaultProps,
    };
    const wrapper = shallow(<PortfolioItem {...props} />);
    const btn = wrapper.find('[data-test="portfolio-website-btn"]');

    expect(btn.exists()).toBeTruthy();
  });

  it('should not render source button', () => {
    const { title, year, description, tech, url, src } = defaultProps;

    const props = {
      title,
      year,
      description,
      tech,
      url,
      src,
    };
    const wrapper = shallow(<PortfolioItem {...props} />);
    const btn = wrapper.find('[data-test="portfolio-source-btn"]');

    expect(btn.exists()).toBeFalsy();
  });

  it('should render correct amount of tech labels', () => {
    const props = {
      ...defaultProps,
    };
    const wrapper = shallow(<PortfolioItem {...props} />);
    const tech = wrapper.find('[data-test="portfolio-tech"]');

    expect(tech.children()).toHaveLength(3);
  });
});
