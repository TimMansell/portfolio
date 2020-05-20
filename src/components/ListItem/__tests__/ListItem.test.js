import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ListItem from '../ListItem';

describe('ListItem', () => {
  it('should render my component', () => {
    const item = {
      list: [],
      icon: {
        name: '',
        family: '',
      },
    };

    // eslint-disable-next-line
    const wrapper = shallow(<ListItem item={item} />);
  });

  it('should match snapshot', () => {
    const item = {
      list: ['Item 1', 'Item 2'],
      icon: {
        name: 'css3-alt',
        family: 'fab',
      },
    };

    const snapshot = renderer.create(<ListItem item={item} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
