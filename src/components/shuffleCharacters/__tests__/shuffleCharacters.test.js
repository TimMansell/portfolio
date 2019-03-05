import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ShuffleCharacters from '../shuffleCharacters';

describe("ShuffleCharacters", () => {
  it("should render my component", () => {
    const wrapper = shallow(<ShuffleCharacters />, {disableLifecycleMethods: true});
  });
});
