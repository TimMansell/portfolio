import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Portfolio from '../Portfolio';

describe("Portfolio", () => {
  it("should render my component", () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Portfolio />);
  });

  it("should match snapshot", () => {
    const snapshot = renderer.create(<Portfolio/>).toJSON();
    
    expect(snapshot).toMatchSnapshot();
  });
});
