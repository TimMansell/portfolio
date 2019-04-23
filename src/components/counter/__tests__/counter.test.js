import React from 'react';
import { shallow } from 'enzyme';

import Counter from '../Counter';

describe("Counter", () => {
  it("should render my component", () => {
    const props = {
      begin: 0,
      end: 1
    };

    const wrapper = shallow(<Counter {...props}/>);
  });
});
