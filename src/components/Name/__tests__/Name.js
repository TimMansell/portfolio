import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Name from '../Name';

describe('Name', () => {
  it('should render my component', () => {
    const wrapper = shallow(<Name />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Name/>).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
