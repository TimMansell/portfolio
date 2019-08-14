import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import {Hamburger} from '../Hamburger'; // Import named so we don't use redux.

describe('Hamburger', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Hamburger />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Hamburger/>).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
