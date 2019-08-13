import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Stats from '../Stats';

describe('Stats', () => {
  it('should render my component', () => {
    const wrapper = shallow(<Stats />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Stats/>).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
