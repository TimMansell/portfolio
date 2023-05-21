import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Picture from '../Picture';

const url = import.meta.url.split('/').slice(0, -3).join('/');

const props = {
  title: 'test title',
  types: ['avif', 'webp', 'jpg'],
  src: 'img/test',
  srcSizes: [{ sizes: ['480', '640'] }],
  width: '50',
};

describe('Picture', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Picture {...props} />);
  });

  it.skip('should match snapshot', () => {
    const snapshot = renderer.create(<Picture {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should render fullscreen image', () => {
    const wrapper = shallow(<Picture {...props} isFullscreen />);
    const image = wrapper.find('[data-test="picture-img"]');

    expect(image.hasClass('fullscreen')).toBeTruthy();
  });

  it('should render non-fullscreen image', () => {
    const wrapper = shallow(<Picture {...props} />);
    const image = wrapper.find('[data-test="picture-img"]');

    expect(image.hasClass('fullscreen')).toBeFalsy();
  });

  it('should render lazy loaded image', () => {
    const wrapper = shallow(<Picture {...props} isLazy />);
    const image = wrapper.find('[data-test="picture-img"]');

    expect(image.props().loading).toBe('lazy');
  });

  it('should render non lazy loaded image', () => {
    const wrapper = shallow(<Picture {...props} />);
    const image = wrapper.find('[data-test="picture-img"]');

    expect(image.props().loading).toBe('auto');
  });

  it('should have correct width', () => {
    const wrapper = shallow(<Picture {...props} />);
    const image = wrapper.find('[data-test="picture-img"]');

    expect(image.props().width).toBe(props.width);
  });

  it('should have correct <source> properties', () => {
    const wrapper = shallow(<Picture {...props} />);
    const source = wrapper.find('[data-test="picture-source-0"]');

    expect(source.props().srcSet).toBe(
      `${url}/img/avif/test-480.avif 480w, ${url}/img/avif/test-640.avif 640w`
    );
    expect(source.props().type).toBe(`image/${props.types[0]}`);
  });

  it('should have correct number of <source>', () => {
    const wrapper = shallow(<Picture {...props} />);
    const sources = wrapper.find('[data-test*="picture-source"]');

    expect(sources).toHaveLength(3);
  });

  it('should render fallback in <img>', () => {
    const wrapper = shallow(<Picture {...props} />);
    const source = wrapper.find('[data-test="picture-img"]');

    expect(source.props().src).toBe(`${url}/img/jpg/test-640.jpg`);
    expect(source.props().alt).toBe(props.title);
  });
});
