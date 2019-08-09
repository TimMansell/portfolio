import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Hi from '../Hi';

describe("Hi", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Hi />);
  });

  it("should match snapshot", () => {
    const snapshot = renderer.create(<Hi/>).toJSON();
    
    expect(snapshot).toMatchSnapshot();
  });
});
