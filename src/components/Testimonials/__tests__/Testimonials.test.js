import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Testimonials from '../Testimonials';

describe("Testimonials", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Testimonials />);
  });

  it("should match snapshot", () => {
    const snapshot = renderer.create(<Testimonials/>).toJSON();
    
    expect(snapshot).toMatchSnapshot();
  });
});
