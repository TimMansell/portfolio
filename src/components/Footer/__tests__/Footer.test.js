import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import FakeTimers from '@sinonjs/fake-timers';

import Footer from '../Footer';

FakeTimers.install();

describe('Footer', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Footer />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Footer />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
