import React from 'react';
import { shallow, mount, render } from 'enzyme';

import StackItem from '../StackItem';

const props = {
  url: '',
  img: 'babel.svg',
  name: '',
  width: ''
};

describe("StackItem", () => {
  it("should render my component", () => {
    const wrapper = shallow(<StackItem stack={props} />);
  });
});
