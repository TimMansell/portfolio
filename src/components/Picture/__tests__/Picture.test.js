import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Picture from '../Picture';

const props = {
  srcs: [
    {
      src: 'test src',
      format: 'jpg',
    },
  ],
  name: 'test name',
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

  it('should have correct <source> properties', () => {
    const wrapper = shallow(<Picture {...props} />);
    const source = wrapper.find('[data-test="picture-source-0"]');

    expect(source.props().srcSet).toBe(props.srcs[0].src);
    expect(source.props().type).toBe(`image/${props.srcs[0].format}`);
  });

  it('should render srcs[0] in <img>', () => {
    const wrapper = shallow(<Picture {...props} />);
    const source = wrapper.find('[data-test="picture-img"]');

    expect(source.props().src).toBe(props.srcs[0].src);
    expect(source.props().alt).toBe(props.name);
  });

  it('should render defaultImg in <img>', () => {
    const defaultImageProps = {
      ...props,
      defaultImg: 'default src',
    };
    const wrapper = shallow(<Picture {...defaultImageProps} />);
    const source = wrapper.find('[data-test="picture-img"]');

    expect(source.props().src).toBe(defaultImageProps.defaultImg);
    expect(source.props().alt).toBe(props.name);
  });
});
