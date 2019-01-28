import React from 'react';
import { shallow } from 'enzyme';

import ScrollFade from '../scrollFade';

describe("ScrollFade", () => {
  it("should render my component", () => {
    const wrapper = shallow(<ScrollFade />);
  });
});
