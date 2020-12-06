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
});
