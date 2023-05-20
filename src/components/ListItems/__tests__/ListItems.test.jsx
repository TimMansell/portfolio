import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ListItems from '../ListItems';

const defaultProps = {
  items: [
    {
      title: 'title 1',
      list: ['list name 1'],
      icon: {
        name: 'css3-alt',
        family: 'fab',
      },
    },
    {
      title: 'title 2',
      list: ['list name 2'],
      icon: {
        name: 'css3-alt',
        family: 'fab',
      },
    },
  ],
};

describe('ListItems', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<ListItems {...defaultProps} />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<ListItems {...defaultProps} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should list correct amount of items', () => {
    const wrapper = shallow(<ListItems {...defaultProps} />);

    expect(wrapper.children()).toHaveLength(2);
  });
});
