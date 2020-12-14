import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Stats from '../Stats';

jest.mock(
  '../json/stats.json',
  () => ({ loc: 3029, pullRequests: 73, commits: 339, coffees: 108 }),
  { virtual: true }
);

describe('Stats', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Stats />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Stats />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
