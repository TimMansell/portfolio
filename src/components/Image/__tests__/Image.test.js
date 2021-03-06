import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Image from '../Image';

const props = {
  src: 'Image/__tests__/img/test.jpg',
  alt: 'alt text',
  width: '50',
};

describe('Image', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Image {...props} />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Image {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
