import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import StackItem from '../StackItem';

const props = {
  url: '',
  img: 'babel.svg',
  name: '',
  width: ''
};

describe('StackItem', () => {
  it('should render my component', () => {
    const wrapper = shallow(<StackItem {...props} />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<StackItem {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
