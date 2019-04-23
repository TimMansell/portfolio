import React from 'react';
import { shallow } from 'enzyme';

import CurrentStack from '../CurrentStack';

describe("CurrentStack", () => {
  it("should render my component", () => {
    const wrapper = shallow(<CurrentStack />);
  });
});
