import React from 'react';
import { shallow } from 'enzyme';

import Presentations from '../presentations';

describe("Presentations", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Presentations />);
  });
});
