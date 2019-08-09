import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Hero from '../Hero';

const props = {
  blurFrom: 0,
  blurTo: 1
};

describe("Hero", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Hero {...props}/>);
  });

  it("should match snapshot", () => {
    const snapshot = renderer.create(<Hero {...props}/>).toJSON();
    
    expect(snapshot).toMatchSnapshot();
  });
});
