import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ShuffleCharacters from '../ShuffleCharacters';

describe("ShuffleCharacters", () => {
  it("should render my component", () => {
    const props =  {
      children: '<p></p>'
    };

    const wrapper = shallow(<ShuffleCharacters {...props} />, {disableLifecycleMethods: true});
  });
});
