import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Skills from '../Skills';

jest.mock(
  '../json/skills.json',
  () => [
    {
      list: [{ name: 'skill 1' }, { name: 'skill 2' }],
      icon: {
        name: 'code',
        family: 'fa',
      },
    },
    {
      list: [{ name: 'skill 3' }, { name: 'skill 4' }],
      icon: {
        name: 'css3-alt',
        family: 'fab',
      },
    },
  ],
  { virtual: true }
);

describe('Skills', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Skills />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Skills />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
