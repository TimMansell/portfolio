import React from 'react';
import { shallow } from 'enzyme';

import ScrollFade from '../scrollFade';

describe("ScrollFade", () => {
  it("should render my component", () => {
    const props =  {
      fadeMultiplier: 0,
      children: '<p></p>'
    };

    const wrapper = shallow(<ScrollFade {...props} />);
  });
});
