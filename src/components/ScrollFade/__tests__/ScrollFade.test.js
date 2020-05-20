import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ScrollFade from '../ScrollFade';

const props = {
  fadeMultiplier: 0,
  children: '<p></p>',
};

describe('ScrollFade', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<ScrollFade {...props} />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<ScrollFade {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
