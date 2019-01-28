import React from 'react';
import { shallow } from 'enzyme';

import {Navigation} from '../nav';

describe("Navigation", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Navigation />, {disableLifecycleMethods:true});
  });
});
