import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import {App} from '../app';

describe('App', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<App />);
  });

  /* it('should match snapshot', () => {
    const snapshot = renderer.create(<App />).toJSON();

    expect(snapshot).toMatchSnapshot();
  }); */
});
