import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import RetiredSkills from '../RetiredSkills';

describe('Retired Skills', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<RetiredSkills />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<RetiredSkills/>).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
