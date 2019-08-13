import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import GoToTop from '../GoToTop';

describe('GoToTop', () => {
  it('should render my component', () => {
    const wrapper = shallow(<GoToTop />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<GoToTop/>).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
