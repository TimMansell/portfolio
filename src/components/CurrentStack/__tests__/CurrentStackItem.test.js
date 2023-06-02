import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import CurrentStackItem from '../CurrentStackItem';

const props = {
  url: 'test url',
  name: 'babel',
  width: '50',
  height: '50',
};

describe('CurrentStackItem', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<CurrentStackItem {...props} />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<CurrentStackItem {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should be correct link href', () => {
    const wrapper = shallow(<CurrentStackItem {...props} />);
    const link = wrapper.find('[data-test="stack-item-link"]');

    expect(link.props().href).toEqual(props.url);
  });
});
