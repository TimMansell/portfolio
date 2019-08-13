import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Presentations from '../Presentations';

describe('Presentations', () => {
  it('should render my component', () => {
    const wrapper = shallow(<Presentations />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Presentations/>).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
