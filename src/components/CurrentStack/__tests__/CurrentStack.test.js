import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import CurrentStack from '../CurrentStack';

// jest.mock(
//   '../json/stack.json',
//   () => [
//     {
//       name: 'Item 1',
//       url: 'url',
//       img: 'react.svg',
//       width: '65',
//     },
//     {
//       name: 'Item 2',
//       url: 'url',
//       img: 'nodejs.svg',
//       width: '90',
//     },
//   ],
//   { virtual: true }
// );

describe('CurrentStack', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<CurrentStack />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<CurrentStack />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  // it('should render correct amount of items', () => {
  //   const wrapper = shallow(<CurrentStack />);
  //   const list = wrapper.find('[data-test="stack-items"]');

  //   expect(list.children()).toHaveLength(2);
  // });
});
