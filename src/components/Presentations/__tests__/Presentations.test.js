import React from 'react';
import { shallow } from 'enzyme';

import Presentations from '../Presentations';

describe("Presentations", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Presentations />);
  });
});
