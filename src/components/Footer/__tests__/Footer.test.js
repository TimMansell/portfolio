import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Footer from '../Footer';

describe('Footer', () => {
  it('should render my component', () => {
    const wrapper = shallow(<Footer />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Footer/>).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
