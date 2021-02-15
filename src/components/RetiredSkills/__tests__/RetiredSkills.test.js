import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import RetiredSkills from '../RetiredSkills';

jest.mock(
  '../json/retiredSkills.json',
  () => [
    {
      title: 'title 1',
      list: ['skill 1', 'skill 2'],
      icon: {
        name: 'code',
        family: 'fa',
      },
    },
    {
      title: 'title 2',
      list: ['skill 3', 'skill 4'],
      icon: {
        name: 'css3-alt',
        family: 'fab',
      },
    },
  ],
  { virtual: true }
);

describe('Retired Skills', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<RetiredSkills />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<RetiredSkills />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
