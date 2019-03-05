import React from 'react';
import { shallow } from 'enzyme';

import Counter from '../counter';

describe("Counter", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Counter />);
  });
});
