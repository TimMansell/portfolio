import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SocialIcons from '../SocialIcons';

describe('SocialIcons', () => {
  it('should render my component', () => {
    const wrapper = shallow(<SocialIcons />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<SocialIcons/>).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
