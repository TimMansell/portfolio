import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { Navigation } from '../Navigation';

describe("Navigation", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Navigation />, {disableLifecycleMethods:true});
  });

  it.skip("should match snapshot", () => {
    const snapshot = renderer.create(<Navigation/>).toJSON();
    
    expect(snapshot).toMatchSnapshot();
  });
});
