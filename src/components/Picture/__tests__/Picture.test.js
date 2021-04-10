import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Picture, { importImages } from '../Picture';

const props = {
  image: {
    name: 'test',
    title: 'test title',
  },
  types: ['avif', 'webp'],
  src: 'Picture/__tests__/img',
  width: '50',
};

describe('Picture', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Picture {...props} />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Picture {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should render fullscreen image', () => {
    const wrapper = shallow(<Picture {...props} isFullscreen />);
    const image = wrapper.find('[data-test="picture-img"]');

    expect(image.hasClass('fullscreen')).toBeTruthy();
  });

  it('should render lazy loaded image', () => {
    const wrapper = shallow(<Picture {...props} isLazy />);
    const image = wrapper.find('[data-test="picture-img"]');

    expect(image.props().loading).toBe('lazy');
  });

  it('should have correct title', () => {
    const wrapper = shallow(<Picture {...props} />);

    expect(wrapper.props().title).toBe(props.image.title);
  });

  it('should have correct width', () => {
    const wrapper = shallow(<Picture {...props} />);
    const image = wrapper.find('[data-test="picture-img"]');

    expect(image.props().width).toBe(props.width);
  });

  it('should have correct <source> properties', () => {
    const wrapper = shallow(<Picture {...props} />);
    const source = wrapper.find('[data-test="picture-source-0"]');

    expect(source.props().srcSet).toBe(`${props.image.name}.${props.types[0]}`);
    expect(source.props().type).toBe(`image/${props.types[0]}`);
  });

  it('should render fallback in <img>', () => {
    const wrapper = shallow(<Picture {...props} />);
    const source = wrapper.find('[data-test="picture-img"]');

    expect(source.props().src).toBe(`${props.image.name}.${props.types[1]}`);
    expect(source.props().alt).toBe(props.image.title);
  });

  it('importImages', () => {
    const { image, types, src } = props;

    const { title, srcs } = importImages(image, types, src);

    expect(title).toBe(image.title);
    expect(srcs).toEqual([
      { type: 'avif', src: 'test.avif' },
      { type: 'webp', src: 'test.webp' },
    ]);
  });
});
