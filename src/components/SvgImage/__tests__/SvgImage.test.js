import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SvgImage from '../SvgImage';

const props = {
  src: 'test src',
  name: 'test name',
  width: '20',
};

describe('SvgImage', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<SvgImage {...props} />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<SvgImage {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should have correct img properties', () => {
    const wrapper = shallow(<SvgImage {...props} />);

    expect(wrapper.props().src).toBe(props.src);
    expect(wrapper.props().alt).toBe(props.name);
    expect(wrapper.props().width).toBe(props.width);
    expect(wrapper.props().title).toBe(props.name);
  });
});
