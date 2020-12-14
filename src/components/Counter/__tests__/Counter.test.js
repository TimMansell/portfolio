import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Counter from '../Counter';

const props = {
  begin: 0,
  end: 1,
};

describe('Counter', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Counter {...props} />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Counter {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should start at correct number', () => {
    const wrapper = shallow(<Counter {...props} />);

    expect(wrapper.text()).toEqual(`${props.begin}`);
  });
});
