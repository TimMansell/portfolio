import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ListItem from '../ListItem';

const defaultProps = {
  item: {
    title: 'title',
    list: ['list name 1', 'list name 2'],
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
});
