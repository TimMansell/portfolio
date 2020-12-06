import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Picture from '../Picture';

const props = {
  src: 'test src',
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
});
