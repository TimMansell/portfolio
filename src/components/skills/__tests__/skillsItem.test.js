import React from 'react';
import { shallow } from 'enzyme';

import SkillsItem from '../skillsItem';

const props =  {
    "list": [],
    "icon": {
        "name": "",
        "family": ""
    }
}

describe("SkillsItem", () => {
  it("should render my component", () => {
    const wrapper = shallow(<SkillsItem skill={props} />);
  });
});
