import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ShuffleContent from '../ShuffleContent';

describe('ShuffleContent', () => {
  it('should render my component', () => {
    const props = {
      children: '<p></p>',
    };

    // eslint-disable-next-line
    const wrapper = shallow(<ShuffleContent {...props}/>);
  });

  it('should match snapshot', () => {
    const props = {
      children: '<p>Text</p>',
    };
    const snapshot = renderer.create(<ShuffleContent {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
