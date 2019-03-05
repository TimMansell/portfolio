import React from 'react';
import { shallow } from 'enzyme';

import CurrentStack from '../currentStack';

describe("CurrentStack", () => {
  it("should render my component", () => {
    const wrapper = shallow(<CurrentStack />);
  });
});
