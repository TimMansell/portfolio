import React from 'react';
import { shallow } from 'enzyme';

import InViewport from '../InViewport';

describe('InViewport', () => {
  it('should render my component', () => {
    const props = {
      children: '<p></p>'
    };

    const wrapper = shallow(<InViewport {...props} />, {disableLifecycleMethods: true});
  });
});
