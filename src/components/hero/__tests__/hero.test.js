import React from 'react';
import { shallow } from 'enzyme';

import Hero from '../hero';

describe("Hero", () => {
  it("should render my component", () => {
    const props = {
      blurFrom: 0,
      blurTo: 1
    };

    const wrapper = shallow(<Hero {...props}/>);
  });
});
