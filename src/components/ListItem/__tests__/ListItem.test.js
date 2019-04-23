import React from 'react';
import { shallow } from 'enzyme';

import ListItem from '../ListItem';

const props =  {
    "list": [],
    "icon": {
        "name": "",
        "family": ""
    }
}

describe("ListItem", () => {
  it("should render my component", () => {
    const wrapper = shallow(<ListItem item={props} />);
  });
});
