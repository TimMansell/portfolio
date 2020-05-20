import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Main from '../Main';

describe('Main', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Main />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Main />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
