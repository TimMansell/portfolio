import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Label from '../Label';

describe('Label', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Label />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Label />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
