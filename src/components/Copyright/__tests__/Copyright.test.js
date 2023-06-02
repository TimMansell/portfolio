import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import FakeTimers from '@sinonjs/fake-timers';

import Copyright from '../Copyright';

FakeTimers.install();

describe('Copyright', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Copyright />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Copyright />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
