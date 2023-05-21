import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PortfolioItem from '../PortfolioItem';

const defaultProps = {
  title: 'Title',
  years: ['2020'],
  types: ['Personal'],
  description: 'Description',
  tech: ['Tech', 'Tech 2'],
  url: 'url.com',
  img: 'test',
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
    const { title, years, description, tech, url, img, types } = defaultProps;

    const props = {
      title,
      years,
      types,
      description,
      tech,
      url,
      img,
    };
    const wrapper = shallow(<PortfolioItem {...props} />);
    const btn = wrapper.find('[data-test="portfolio-source-btn"]');

    expect(btn.exists()).toBeFalsy();
  });
});
