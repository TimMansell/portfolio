import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ListItem from '../ListItem';

const defaultProps = {
  item: {
    list: [{ name: 'list name 1' }, { name: 'list name 2' }],
    icon: {
      name: 'css3-alt',
      family: 'fab',
    },
  },
};

describe('ListItem', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<ListItem {...defaultProps} />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<ListItem {...defaultProps} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should list correct amount of items', () => {
    const wrapper = shallow(<ListItem {...defaultProps} />);
    const list = wrapper.find('[data-test="list-item-list"]');

    expect(list.children()).toHaveLength(2);
  });

  it('should list item without link', () => {
    const wrapper = shallow(<ListItem {...defaultProps} />);
    const link = wrapper.find('[data-test="list-item-list"] a');

    expect(link).toHaveLength(0);
  });

  it('should list item with link', () => {
    const props = {
      item: {
        ...defaultProps.item,
        list: [{ name: 'Item 1', url: 'Test url' }],
      },
    };

    const wrapper = shallow(<ListItem {...props} />);
    const link = wrapper.find('[data-test="list-item-list"] a');

    expect(link).toHaveLength(1);
  });
});
