import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Location from '../Location';

describe("Location", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Location />);
  });

  it("should match snapshot", () => {
    const snapshot = renderer.create(<Location/>).toJSON();
    
    expect(snapshot).toMatchSnapshot();
  });
});
