import React from 'react';
import { shallow } from 'enzyme';

import ShuffleContent from '../ShuffleContent';

describe("ShuffleContent", () => {
  it("should render my component", () => {
    const props =  {
      children: '<p></p>'
    };

    const wrapper = shallow(<ShuffleContent {...props}/>);
  });
});
