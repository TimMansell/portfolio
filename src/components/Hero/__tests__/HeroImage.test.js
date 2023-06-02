import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HeroImage from '../HeroImage';

describe('HeroImage', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<HeroImage />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<HeroImage />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
