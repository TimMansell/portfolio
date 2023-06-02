import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HeroOverlay from '../HeroOverlay';

describe('HeroOverlay', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<HeroOverlay />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<HeroOverlay />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
