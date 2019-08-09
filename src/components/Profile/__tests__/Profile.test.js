import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Profile from '../Profile';

describe("Profile", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Profile />);
  });

  it("should match snapshot", () => {
    const snapshot = renderer.create(<Profile/>).toJSON();
    
    expect(snapshot).toMatchSnapshot();
  });
});
