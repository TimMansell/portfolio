import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import CurrentStackItem from '../CurrentStackItem';

const props = {
  url: 'test url',
  img: 'babel.svg',
  name: 'test name',
  width: '50',
};

describe('CurrentStackItem', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<CurrentStackItem {...props} />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<CurrentStackItem {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should be correct link href', () => {
    const wrapper = shallow(<CurrentStackItem {...props} />);
    const link = wrapper.find('[data-test="stack-item-link"]');

    expect(link.props().href).toEqual(props.url);
  });

  it('should be pass correct props to image', () => {
    const wrapper = shallow(<CurrentStackItem {...props} />);
    const image = wrapper.find('SvgImage');

    expect(image.props().src.default).toEqual(props.img);
    expect(image.props().name).toEqual(props.name);
    expect(image.props().width).toEqual(props.width);
  });
});
