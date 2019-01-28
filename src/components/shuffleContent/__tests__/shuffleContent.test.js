import React from 'react';
import { shallow } from 'enzyme';

import ShuffleContent from '../shuffleContent';

describe("ShuffleContent", () => {
  it("should render my component", () => {
    const wrapper = shallow(<ShuffleContent />);
  });
});
