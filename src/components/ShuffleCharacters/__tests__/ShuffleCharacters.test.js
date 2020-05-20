import React from 'react';
import { shallow } from 'enzyme';

import ShuffleCharacters from '../ShuffleCharacters';

describe('ShuffleCharacters', () => {
  it('should render my component', () => {
    const props = {
      children: '<p></p>',
    };

    // eslint-disable-next-line
    const wrapper = shallow(<ShuffleCharacters {...props} />, {disableLifecycleMethods: true});
  });
});
