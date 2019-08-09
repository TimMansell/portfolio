import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import LearnMore from '../LearnMore';

describe("LearnMore", () => {
  it("should render my component", () => {
    const wrapper = shallow(<LearnMore />);
  });

  it("should match snapshot", () => {
    const snapshot = renderer.create(<LearnMore/>).toJSON();
    
    expect(snapshot).toMatchSnapshot();
  });
});
