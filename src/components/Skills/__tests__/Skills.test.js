import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Skills from '../Skills';

describe('Skills', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Skills />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Skills />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
