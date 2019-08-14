import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Intro from '../Intro';

describe('Intro', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Intro />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Intro/>).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
