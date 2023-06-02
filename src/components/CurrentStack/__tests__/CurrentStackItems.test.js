import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import CurrentStackItems from '../CurrentStackItems';

jest.mock(
  '../json/stack.json',
  () => [
    {
      name: 'react',
      url: 'url',
      width: '65',
      height: '50',
    },
    {
      name: 'nodejs',
      url: 'url',
      width: '90',
      height: '50',
    },
  ],
  { virtual: true }
);

describe('CurrentStackItems', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<CurrentStackItems />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<CurrentStackItems />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should render correct amount of items', () => {
    const wrapper = shallow(<CurrentStackItems />);
    const list = wrapper.find('[data-test="stack-items"]');

    expect(list.children()).toHaveLength(2);
  });
});
